FROM ubuntu:jammy

# https://askubuntu.com/questions/909277/avoiding-user-interaction-with-tzdata-when-installing-certbot-in-a-docker-contai
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends --no-install-suggests \
  software-properties-common

RUN add-apt-repository universe
RUN apt-get update && \
  apt-get install -y --no-install-recommends --no-install-suggests \
  curl \
  gnupg \
  lsb-release

RUN curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key \
  -o /usr/share/keyrings/ros-archive-keyring.gpg

RUN echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu jammy main" > /etc/apt/sources.list.d/ros2.list

RUN apt-get update && \
  apt-get install -y --no-install-recommends --no-install-suggests \
  build-essential \
  ros-humble-ros-base \
  ros-humble-ros2bag \
  ros-humble-rosbag2-transport \
  ros-humble-rosbag2-storage-mcap \
  python3 \
  python3-pip \
  python3-colcon-common-extensions \
  && rm -rf /var/lib/apt/lists/*

RUN python3 -m pip install mcap

WORKDIR /mcap/ros2

COPY py_mcap_demo py_mcap_demo

RUN . /opt/ros/humble/setup.sh && colcon build

COPY entry.sh entry.sh

ENTRYPOINT ["/bin/bash", "entry.sh"]
