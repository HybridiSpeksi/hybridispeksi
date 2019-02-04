#!/bin/bash
. ./scripts/utils.sh
# TAG=

build() {
  local name="${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
  local latest="${DOCKER_IMAGE_NAME}:latest"


  echo "building image ${name}"

  # Run docker with the provided arguments
  docker build -t "${name}" .
  docker tag ${name} ${latest} 
}

build
