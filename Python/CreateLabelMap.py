import tensorflow as tf
from object_detection.utils import config_util
from object_detection.protos import pipeline_pb2
from google.protobuf import text_format

# Create a new pipeline configuration object
pipeline_config = pipeline_pb2.TrainEvalPipelineConfig()

# Parse the pipeline configuration file and merge it with the new pipeline configuration object
with tf.io.gfile.GFile('Tensorflow/workspace/models/my_ssd_mobnet_tuned3/pipeline.config', "r") as f:
    proto_str = f.read()
    text_format.Merge(proto_str, pipeline_config)

# Load the existing pipeline configuration from file
config = config_util.get_configs_from_pipeline_file('Tensorflow/workspace/models/my_ssd_mobnet_tuned3/pipeline.config')

# Set the number of classes in the model
pipeline_config.model.ssd.num_classes = 2

# Set the batch size used for training
pipeline_config.train_config.batch_size = 4

# Set the path to the pre-trained model checkpoint
pipeline_config.train_config.fine_tune_checkpoint = 'Tensorflow/workspace/pre-trained-models/ssd_mobilenet_v2_fpnlite_320x320_coco17_tpu-8/checkpoint/ckpt-0'

# Set the type of fine-tuning to perform (detection, classification, or segmentation)
pipeline_config.train_config.fine_tune_checkpoint_type = "detection"

# Set the path to the label map file
pipeline_config.train_input_reader.label_map_path = 'Tensorflow/workspace/annotations/label_map.pbtxt'

# Set the path to the training data record file
pipeline_config.train_input_reader.tf_record_input_reader.input_path[:] = ['Tensorflow/workspace/annotations/train.record']

# Set the path to the evaluation label map file
pipeline_config.eval_input_reader[0].label_map_path = 'Tensorflow/workspace/annotations/label_map.pbtxt'

# Set the path to the evaluation data record file
pipeline_config.eval_input_reader[0].tf_record_input_reader.input_path[:] = ['Tensorflow/workspace/annotations/test.record']











