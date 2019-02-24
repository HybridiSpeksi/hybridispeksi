#!/bin/bash
. ./scripts/utils.sh

push() {
  echo "pushing image ${DOCKER_IMAGE_NAME}"

  # Run docker with the provided arguments
  docker push "${DOCKER_IMAGE_NAME}"
}

push
