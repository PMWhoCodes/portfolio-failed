
const SVG: React.FC = () => {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15V85V98C0 99.1046 0.89543 100 2 100H15H40H60H85H98C99.1046 100 100 99.1046 100 98V85V62C100 60.8954 99.1046 60 98 60H87C85.8954 60 85 60.8954 85 62V83C85 84.1046 84.1046 85 83 85H62C60.8954 85 60 84.1046 60 83V72C60 70.8954 59.1046 70 58 70H42C40.8954 70 40 70.8954 40 72V83C40 84.1046 39.1046 85 38 85H17C15.8954 85 15 84.1046 15 83V17C15 15.8954 15.8954 15 17 15H83C84.1046 15 85 15.8954 85 17V38C85 39.1046 85.8954 40 87 40H98C99.1046 40 100 39.1046 100 38V15V2C100 0.895431 99.1046 0 98 0H85H15H2C0.895431 0 0 0.89543 0 2V15ZM50 60C55.5228 60 60 55.5228 60 50C60 44.4772 55.5228 40 50 40C44.4772 40 40 44.4772 40 50C40 55.5228 44.4772 60 50 60Z" fill="url(#paint0_linear_11_441)" />
            <defs>
                <linearGradient id="paint0_linear_11_441" x1="-7.45058e-07" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D70000" />
                    <stop offset="1" stop-color="#F19100" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export {SVG as Logo}