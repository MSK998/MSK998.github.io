<template>
  <div class="icons-section">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 40 40"
      display="none"
      width="0"
      height="0"
    >
      <symbol id="linkedin" viewBox="0 0 25 25">
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        ></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </symbol>
      <symbol id="mail" viewBox="0 0 20 20">
        <path
          d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"
        ></path>
      </symbol>
      <symbol id="hexagon" viewBox="0 0 40 40">
        <polygon
          points="3.6,10.5 3.6,29.5 20,39 36.4,29.5 36.4,10.5 20,1"
          vector-effect="non-scaling-stroke"
        />
      </symbol>
      <symbol id="github" viewBox="0 0 25 25">
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        ></path>
      </symbol>
      <symbol id="home" viewBox="0 0 25 25">
        <path
          d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"
        ></path>
      </symbol>
      <symbol id="blog" viewBox="0 0 25 25">
        <path
          d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"
        ></path>
      </symbol>
    </svg>
    <ul id="icons01" class="icons">
      <li>
        <a href="/">
          <svg>
            <use xlink:href="#home"></use>
          </svg>
        </a>
        <svg>
          <use xlink:href="#hexagon"></use>
        </svg>
      </li>
      <li>
        <a href="/blog">
          <svg>
            <use xlink:href="#blog"></use>
          </svg>
        </a>
        <svg>
          <use xlink:href="#hexagon"></use>
        </svg>
      </li>
      <li>
        <a
          href="https://uk.linkedin.com/in/mark-scott-kiddie-bb3852162"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg>
            <use xlink:href="#linkedin"></use>
          </svg>
          <span class="label">LinkedIn</span>
        </a>
        <svg>
          <use xlink:href="#hexagon"></use>
        </svg>
      </li>
      <li>
        <a
          href="https://github.com/MSK998"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg>
            <use xlink:href="#github"></use>
          </svg>
          <span class="label">GitHub</span>
        </a>
        <svg>
          <use xlink:href="#hexagon"></use>
        </svg>
      </li>
      <li>
        <a href="mailto:msk99824@gmail.com">
          <svg>
            <use xlink:href="#mail"></use>
          </svg>
          <span class="label">Email</span>
        </a>
        <svg>
          <use xlink:href="#hexagon"></use>
        </svg>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* .icons-section {
  margin-top: 2rem;
} */
</style>