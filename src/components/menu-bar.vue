<template>
  <div class="menubar d-none d-md-flex flex-column position-fixed">
    <div class="menubar__body overflow-auto">
      <ul class="list_style_none p-0">
        <li class="mt-2 p-3 text-uppercase">
          General
        </li>
        <li class="waves">
          <a
            href="#"
            class="waves__link text-decoration-none text-secondary pt-2 pb-2 pl-4 pr-4 d-flex align-items-center"
            @click.prevent
          >
            <v-icon
              name="th-list"
              scale="1"
            />
            <span class="ml-3">Dashboard</span>
          </a>
        </li>
        <li class="waves">
          <a
            href="#"
            class="waves__link text-decoration-none text-secondary pt-2 pb-2 pl-4 pr-4 d-flex align-items-center"
            @click.prevent
          >
            <v-icon
              name="th-list"
              scale="1"
            />
            <span class="ml-3">Layouts</span>

            <v-icon
              name="angle-right"
              scale="1"
              class="ml-auto"
            />
          </a>
        </li>
        <li class="waves">
          <a
            href="#"
            class="waves__link text-decoration-none text-secondary pt-2 pb-2 pl-4 pr-4 d-flex align-items-center"
            @click.prevent
          >
            <v-icon
              name="expand"
              scale="1"
            />
            <span class="ml-3">Pages</span>
            <v-icon
              name="angle-right"
              scale="1"
              class="ml-auto"
            />
          </a>
        </li>
        <li class="mt-2 p-3 text-uppercase">
          Elements
        </li>
        <li class="waves">
          <a
            href="#"
            class="waves__link text-decoration-none text-secondary pt-2 pb-2 pl-4 pr-4 d-flex align-items-center"
            @click.prevent
          >
            <v-icon
              name="palette"
              scale="1"
            />
            <span class="ml-3">Basic UI</span>
            <v-icon
              name="angle-right"
              scale="1"
              class="ml-auto"
            />
          </a>
        </li>
        <li class="waves">
          <a
            href="#"
            class="waves__link text-decoration-none text-secondary pt-2 pb-2 pl-4 pr-4 d-flex align-items-center"
            @click.prevent
          >
            <v-icon
              name="fill-drip"
              scale="1"
            />
            <span class="ml-3">Advanced UI</span>
            <v-icon
              name="angle-right"
              scale="1"
              class="ml-auto"
            />
          </a>
        </li>
        <li class="waves">
          <a
            href="#"
            class="waves__link text-decoration-none text-secondary pt-2 pb-2 pl-4 pr-4 d-flex align-items-center"
            @click.prevent
          >
            <v-icon
              name="puzzle-piece"
              scale="1"
            />
            <span class="ml-3">Structure</span>
            <v-icon
              name="angle-right"
              scale="1"
              class="ml-auto"
            />
          </a>
        </li>
        <li class="waves">
          <a
            href="#"
            class="waves__link text-decoration-none text-secondary pt-2 pb-2 pl-4 pr-4 d-flex align-items-center"
            @click.prevent
          >
            <v-icon
              name="th-list"
              scale="1"
            />
            <span class="ml-3">Widgets</span>
            <v-icon
              name="angle-right"
              scale="1"
              class="ml-auto"
            />
          </a>
        </li>
        <li class="waves">
          <a
            href="#"
            class="waves__link text-decoration-none text-secondary pt-2 pb-2 pl-4 pr-4 d-flex align-items-center"
            @click.prevent
          >
            <v-icon
              name="comment-alt"
              scale="1"
            />
            <span class="ml-3">Forms</span>
            <v-icon
              name="angle-right"
              scale="1"
              class="ml-auto"
            />
          </a>
        </li>
        <li class="waves">
          <a
            href="#"
            class="waves__link text-decoration-none text-secondary pt-2 pb-2 pl-4 pr-4 d-flex align-items-center"
            @click.prevent
          >
            <v-icon
              name="table"
              scale="1"
            />
            <span class="ml-3">Tables</span>
            <v-icon
              name="angle-right"
              scale="1"
              class="ml-auto"
            />
          </a>
        </li>
        <li class="waves">
          <a
            href="#"
            class="waves__link text-decoration-none text-secondary pt-2 pb-2 pl-4 pr-4 d-flex align-items-center"
            @click.prevent
          >
            <v-icon
              name="chart-bar"
              scale="1"
            />
            <span class="ml-3">Chart</span>
            <v-icon
              name="angle-right"
              scale="1"
              class="ml-auto"
            />
          </a>
        </li>
        <li class="mt-2 p-3 text-uppercase">
          Apps
        </li>
        <li class="waves">
          <a
            href="#"
            class="waves__link text-decoration-none text-secondary pt-2 pb-2 pl-4 pr-4 d-flex align-items-center"
            @click.prevent
          >
            <v-icon
              name="list"
              scale="1"
            />
            <span class="ml-3">Apps</span>
            <v-icon
              name="angle-right"
              scale="1"
              class="ml-auto"
            />
          </a>
        </li>
      </ul>
      <div class="mt-5 mb-5 pl-4 pr-4">
        <p class="mt-2 mb-2">
          Milestone
          <span class="float-right">30%</span>
        </p>
        <div class="progress progress_size_xs">
          <div
            class="progress-bar bg-primary"
            style="width: 30%;"
            role="progressbar"
          />
        </div>
        <p class="mt-2 mb-2">
          Release
          <span class="float-right">60%</span>
        </p>
        <div class="progress progress_size_xs">
          <div
            class="progress-bar bg-warning"
            style="width: 60%;"
            role="progressbar"
          />
        </div>
      </div>
    </div>
    <div class="waves waves_color_footer d-flex justify-content-between">
      <a
        href="#"
        class="waves__footer p-4 text-secondary"
        @click.prevent
      >
        <v-icon
          name="cog"
          scale="0.9"
          class="ml-2 mr-2"
        />
      </a>
      <a
        href="#"
        class="waves__footer p-4 text-secondary"
        @click.prevent
      >
        <v-icon
          name="eye-slash"
          scale="0.9"
          class="ml-2 mr-2"
        />
      </a>
      <a
        href="#"
        class="waves__footer p-4 text-secondary"
        @click.prevent
      >
        <v-icon
          name="power-off"
          scale="0.9"
          class="ml-2 mr-2"
        />
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'MenuBar',
  }
</script>