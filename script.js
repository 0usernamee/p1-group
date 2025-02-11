<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Select all image wrappers
    const imageWrappers = document.querySelectorAll(".image-wrapper");

    imageWrappers.forEach((wrapper) => {
      // Add hover effect using JS
      wrapper.addEventListener("mouseenter", () => {
        wrapper.classList.add("hover-active");
      });

      wrapper.addEventListener("mouseleave", () => {
        wrapper.classList.remove("hover-active");
      });
    });
  });
</script>
