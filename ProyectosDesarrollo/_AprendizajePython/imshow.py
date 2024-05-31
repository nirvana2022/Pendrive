import cv2
import matplotlib.pyplot as plt

imagen = cv2.imread('C:\Users\ALEX\Desktop\PROYECTOS DESARROLLO\python\imagenes\ramacafevr.JPEG')
b ,g , r = cv2.split(imagen)
imagen_mat = cv2.merge([r, g, b])
plt.imshow(imagen)
plt.show()


