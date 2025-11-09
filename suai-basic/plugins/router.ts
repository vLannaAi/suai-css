export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  // Disable automatic scroll behavior for hash navigation
  // We handle scrolling manually with our scrollTo function
  router.options.scrollBehavior = () => {
    return { left: 0, top: 0 }
  }
})
