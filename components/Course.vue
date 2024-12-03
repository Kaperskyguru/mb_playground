<template>
  <div class="group">
    <div
      v-if="course"
      class="flex md:flex-row flex-col bg-[#1E3A8A] items-center justify-around text-white pl-2 rounded shadow-xl"
    >
      <div class="text-[#D1D5DB]">
        <div class="p-2">
          <div class="py-1">
            <h2 class="text-xl">
              Become A {{ course?.value }} Backend Engineer
            </h2>
          </div>
          <div class="py-1 flex">
            <p class="md:text-md text-sm">
              All-in-one {{ course?.value }} course for learning backend
              engineering with {{ course?.value }}. This comprehensive course is
              designed for developers seeking proficiency in
              {{ course?.value }}.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-2/5 w-full my-3 px-2 md:px-1 md:my-1 flex">
        <a
          target="_blank"
          :href="`${course?.url}?ref=codeplayground-${lang}`"
          class="w-full px-6 flex justify-center text-white py-2 bg-[#3B82F6] rounded-full group-hover:bg-[#1E3A8A] group-hover:border-[#3B82F6] border border-[#1E3A8A]"
        >
          Learn {{ course?.value }}, now
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["lang"]);

const courses = ref([
  {
    id: ["javascript", "typescript"],
    value: "Node.js",
    url: "https://masteringbackend.com/courses/become-a-nodejs-backend-engineer",
  },
  //   {
  //     id: "php",
  //     value: "PHP",
  //     url: "https://masteringbackend.com/courses/single",
  //   },
  {
    id: "go",
    value: "Golang",
    url: "https://masteringbackend.com/courses/become-a-golang-backend-engineer",
  },
  {
    id: "rust",
    value: "Rust",
    url: "https://masteringbackend.com/courses/become-a-rust-backend-engineer",
  },
  {
    id: "python",
    value: "Python",
    url: "https://masteringbackend.com/courses/become-a-python-backend-engineer",
  },
  {
    id: "ruby",
    value: "Ruby",
    url: "https://masteringbackend.com/courses/become-a-ruby-backend-engineer",
  },
  {
    id: "java",
    value: "Java + Spring",
    url: "https://masteringbackend.com/courses/become-a-java-spring-backend-engineer",
  },
]);

const course = computed(() =>
  courses.value.find((course) => course.id.includes(props.lang))
);
</script>

<style scoped>
</style>