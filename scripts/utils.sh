
getCommitHash() {
  git log --pretty=format:'%h' -n 1
}

readonly DOCKER_IMAGE_NAME="hybridispeksi/web"
readonly DOCKER_IMAGE_TAG=$(getCommitHash)
