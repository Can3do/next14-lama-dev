const SuccessFormAlert = () => {
    return (
        <div
        role="alert"
        data-dismissible="alert"
        class="relative flex w-full max-w-screen-md px-4 py-3 text-base text-white bg-green-700/80 rounded-lg font-regular ring-2 ring-green-500 shadow-md shadow-green-500/50">
        <div class="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
            </svg>
        </div>
        <div class="ml-3 ">
            <p class="block font-sans text-md antialiase font-medium leading-snug tracking-normal text-white">Success</p>
        </div>
    </div>
    )
}

export default SuccessFormAlert