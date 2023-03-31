import cv2 as cv
import os
import time
import uuid

labels = ['DefectivePin', 'NonDefectivePin']
IMAGES_PATH = os.path.join('images', 'collectedimages')
i = 0
while i <= 1:
    path = os.path.join(IMAGES_PATH, labels[i])
    i += 1

def TakePic(pin_type):
    if pin_type.lower() == 'defective':
        type = 0
    else:
        type = 1
    cap = cv.VideoCapture(0)
    print('Position the microscope...')
    time.sleep(5)
    print('Taking a picture...')
    ret, frame = cap.read()
    imgname = os.path.join(IMAGES_PATH, labels[type], labels[type] + '.' + '{}.jpg'.format(str(uuid.uuid1())))
    cv.imwrite(imgname, frame)
    cv.imshow('frame', frame)
    time.sleep(5)
    cap.release()
    cv.destroyAllWindows()
    print(os.path.abspath(imgname))

TakePic('nondefective')