# This line installs the pywt5 library using the pip package manager.
!pip install pyqt5

# This line clones the LabelImg repository from Github into the current working directory
git clone https://github.com/tzutalin/labelImg {LabelImg}
 
# This line changes the current working directory to LabelImg repository and runs pyrcc5 command to convert the resources.qrc file into a Python file
cd {LabelImg} && pyrcc5 -o libs/resources.py resources.qrc

# This line runs the labelImg.py script in the current working directory
python labelImg.py