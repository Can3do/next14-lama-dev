const ErrorFormAlert = ({error}) => {
    return (
        <div
        role="alert"
        data-dismissible="alert"
        class="relative flex w-full max-w-screen-md px-4 py-3 text-base text-white bg-red-700/80 rounded-lg font-regular ring-2 ring-red-500 shadow-md shadow-red-500/50">
        <div class="shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"
        stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
        </div>
        <div class="ml-3">
            <p class="block font-sans text-md antialiased font-medium leading-snug tracking-normal text-white">{error}</p>
        </div>
    </div>
    )
}

export default ErrorFormAlert