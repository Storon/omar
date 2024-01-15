document.addEventListener('DOMContentLoaded', function () {
  const videoInput = document.getElementById('video-input');
  const video = document.getElementById('video');

  videoInput.addEventListener('change', function () {
      const file = videoInput.files[0];
      if (file) {
          const objectURL = URL.createObjectURL(file);
          video.src = objectURL;
          video.controls = true;
      }
  });
});

function uploadVideo() {
  // Add code to handle video upload to the server (backend).
  alert('Video uploaded successfully!');
}
