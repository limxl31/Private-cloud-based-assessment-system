# Private-cloud-based-assessment-system

An assessment system that provides a platform for students to take their assessment in a restricted environment through utilising a cluster of Raspberry Pi devices as a substitute for conventional data centre infrastructure.

The Express Web Application consists of a front and back end.
![image](https://github.com/limxl31/Private-cloud-based-assessment-system/assets/66054853/003618fd-f0fd-461f-a78d-9c04c7da9faa)
The front end serves as an interface for the user to access and submit the assessments.
The back-end components are containerised into different docker containers containing the functions to process the assessments such as Multiple Choice Questions (MCQ), Structured Answer Questions (SAQ) and Code Questions.
The web application will be deployed in the Raspberry Pi cluster in the form illustrated in Figure below.
![image](https://github.com/limxl31/Private-cloud-based-assessment-system/assets/66054853/fff0fb0f-cc63-4e1a-8fea-e170419ba3e7)
The first node, which is raspberrypi5 initiates a wireless network with 192.168.50.1/24 subnet which allows users to connect to it. Raspberrypi5 holds the front end of the web application where users interact with. Once connected, the user will need to authenticate into the system to gain access to the assessments and shared resources in the cluster. Internet activity can also be constrained by setting firewall rules on the network switch.

After the assessments are completed and submitted by the users, the assessments will be sent to raspberrypi4 which serves as the K3s server control plane to distribute the tasks among itself and the K3s Agents or worker nodes


**To test the functionalities of the frontend and backend of the web application without the raspberry pi**
1. Clone the repository or download the code.
2. Type "npm install" into terminal to install all dependencies.
3. Navigate into "client" directory and enter "npm start" into terminal.
4. Open another terminal, navigate to "server" directory and enter "npm start" into terminal
5. Open browser and type "https://www.localhost:3000/"

**To test functionalities in the raspberry pi**
The Raspberry Pis are labelled from top to bottom as raspberrypi1, raspberrypi2…. raspberrypi5, where the bottom raspberrypi5 will serve as the main node to enter the system. 
![image](https://github.com/limxl31/Private-cloud-based-assessment-system/assets/66054853/79da8b71-a81a-43dc-b1a3-6dda4364565c)

Each of the Raspberry Pi Nodes is first configured with the following configuration
Hostname: raspberrypiX
Username: pi
Password: raspberry (password for raspberrypi5 is raspberrypi)
SSH with Password Authentication 
Wi-Fi internet access.
Where X refers to the Node number assigned to it.
Each of the Raspberry Pi was installed with Ubuntu Server 22.04.3 LTS (64bit) which is compatible with Micro K3s except raspberrypi5.

1. Power on the Raspberry Pi cluster
2. Connect to Raspberry Pi cluster Wireless Access Point with the following:
SSID: FYPraspberrypi
Password: raspberry
3. Once connected, open browser and navigate to "http://www.192.168.1.103:5000/" to view the frontend webpage

*To access the metrics server*
1. SSH into raspberrypi4
2. Type "watch kubectl top nodes" into terminal
![image](https://github.com/limxl31/Private-cloud-based-assessment-system/assets/66054853/301d28dd-f43b-4e2a-8cb6-ddc4d96781c6)

*To access the kubernetes dashboard*
1. SSH into raspberrypi4
2. Type "kubectl proxy" into terminal
3. kubectl will make dashboard available at "http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"
4. Fill in bearer token as "eyJhbGciOiJSUzI1NiIsImtpZCI6InFSM1NSX05FSkQ2UkY0VjduMjVDVXZZU05wR1NNLWZaNmI1ME41VFBKNnMifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiLCJrM3MiXSwiZXhwIjoxNzA5NzE1OTE5LCJpYXQiOjE3MDk3MTIzMTksImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJkZWZhdWx0Iiwic2VydmljZWFjY291bnQiOnsibmFtZSI6ImRhc2hib2FyZC1hZG1pbi1zYSIsInVpZCI6IjNlZmYyZGJlLTFmNWMtNGI4Ny1hZTZkLTY1N2NjOWI2ZDM0ZCJ9fSwibmJmIjoxNzA5NzEyMzE5LCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6ZGVmYXVsdDpkYXNoYm9hcmQtYWRtaW4tc2EifQ.ST60emAt3sBZRCxU-eK_QtXfdO1zDe5z_Xj5ZEwqXStavdD-zUPFi1NK2P2T-Gy9PTiC1tH0nHrL1MPhrFMY2_T9JVaPhXY0b0Q4vhdW_X2dARhL8e4gGZqsAW3iNHDKNx1axMhJIu4Hp_WzJn1NWRhSpfDbF785RVszflf1ZR8ZSrEYtwzIfqOmXghiKW82q8_Bnb2b_bx8CceV5dqVw1H11ol6wo5XisQ84WcwlFnf4RqSXTM5ogcW55dO_TlvZWwoXA-OTHMU317r0bTaqNTWrsdNMbiYSWaAwR-D14THkEMZASqJcUTthMXfAMQSFu_e2yAgBizd0oc5aS8bPw"
5. Navigate to the "Pods" page under workloads to view active pods
![image](https://github.com/limxl31/Private-cloud-based-assessment-system/assets/66054853/be2762c3-1a8a-433a-a372-4bb0f41a84a6)



