import tensorflow as tf
from object_detection.utils import config_util
from object_detection.protos import pipeline_pb2
from google.protobuf import text_format

def UpdateConfig(model_name):
    # Create a new pipeline configuration
    pipeline_config = pipeline_pb2.TrainEvalPipelineConfig()

    # Convert model_name to string
    model_name = str(model_name)

    # Path to the configuration file
    config_path = f'{model_name}/pipeline.config'

    # Read the existing configuration into a string
    with tf.io.gfile.GFile(config_path, "r") as o:
        proto_str = o.read()
        # Parse the string and fill the pipeline configuration
        text_format.Merge(proto_str, pipeline_config)

    # Set the number of classes
    pipeline_config.model.ssd.num_classes = 2

    # Set the batch size
    pipeline_config.train_config.batch_size = 4

    # Set the fine-tune checkpoint
    pipeline_config.train_config.fine_tune_checkpoint = 'ssd_mobilenet_v1_fpnlite_640x640_coco17_tpu-8/checkpoint/ckpt-0'

    # Set the fine-tune checkpoint type
    pipeline_config.train_config.fine_tune_checkpoint_type = "detection"

    # Set the label map path for the training input reader
    pipeline_config.train_input_reader.label_map_path= 'annotations/label_map.pbtxt'

    # Set the input path for the training input reader
    pipeline_config.train_input_reader.tf_record_input_reader.input_path[:] = ['annotations/train.record']

    # Add an evaluation input reader if one doesn't exist
    if not pipeline_config.eval_input_reader:
        pipeline_config.eval_input_reader.add()

    # Set the label map path for the evaluation input reader
    pipeline_config.eval_input_reader[0].label_map_path = 'annotations/label_map.pbtxt'

    # Set the input path for the evaluation input reader
    pipeline_config.eval_input_reader[0].tf_record_input_reader.input_path[:] = ['annotations/test.record']

    # Convert the pipeline configuration to a string and write it back to the configuration file
    config_text = text_format.MessageToString(pipeline_config)
    with tf.io.gfile.GFile(config_path, "wb") as o:
        o.write(config_text)
UpdateConfig('LEDpinDetection_v1')






