import { Link } from "react-router-dom"
import PropTypes from 'prop-types';


export default function Logo ({location}) {
    return (
        <div className={location === 0 ? "div-logo" : "div-logo-footer"}>
            <svg id="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 25.04">
                <Link to='/'>
                    <g id="logo"><g><polygon points="14.48 14.78 14.42 14.78 6.04 .54 0 .54 0 24.51 6.04 24.51 6.04 10.26 6.1 10.26 14.48 24.51 20.52 24.51 20.52 .54 14.48 .54 14.48 14.78"></polygon><path d="M38.35,15.86c0,3.12-1.34,4.26-3.99,4.26s-3.99-1.14-3.99-4.26V.54h-6.03V15.86c0,5.97,2.78,9.19,10.02,9.19s10.02-3.22,10.02-9.19V.54h-6.03V15.86Z"></path><path d="M58.83,.54h-10.63V24.51h10.96c6.67,0,10.36-4.26,10.36-11.97S65.5,.54,58.83,.54Zm-.74,19.04h-3.86V5.47h3.86c3.76,0,5.26,2.72,5.26,7.07s-1.51,7.04-5.26,7.04Z"></path><polygon points="78.11 14.65 88.56 14.65 88.56 9.72 78.11 9.72 78.11 5.46 90.24 5.46 90.24 .54 72.07 .54 72.07 24.51 90.44 24.51 90.44 19.58 78.11 19.58 78.11 14.65"></polygon><path d="M113.53,.54h-11.63V24.51h6.04V15.82h5.6c4.99,0,8.11-2.62,8.11-7.64s-3.12-7.64-8.11-7.64Zm-1.41,10.36h-4.19V5.46h4.19c2.08,0,3.35,.7,3.35,2.72s-1.27,2.71-3.35,2.71Z"></path><path d="M139.18,13.44v-.07c2.98-.67,4.86-2.65,4.86-6,0-4.36-3.22-6.84-8.55-6.84h-11.3V24.51h6.03v-8.35h3.76c5.13,0,2.95,7.34,4.12,8.35h6.27v-.34c-1.37-.4,.8-9.69-5.2-10.73Zm-4.86-2.21h-4.09V5.46h4.09c2.41,0,3.69,.87,3.69,2.88s-1.27,2.88-3.69,2.88Z"></path><path d="M157.95,0c-7.61,0-11.87,5.3-11.87,12.51s4.26,12.54,11.87,12.54,11.87-5.3,11.87-12.54-4.33-12.51-11.87-12.51Zm0,20.11c-4.39,0-5.7-3.42-5.7-7.61s1.31-7.58,5.7-7.58,5.7,3.42,5.7,7.58-1.34,7.61-5.7,7.61Z"></path><path d="M182.13,16.53c0,2.28-.54,3.59-2.52,3.59s-2.51-1.31-2.51-3.59v-2.01h-5.36v2.01c0,4.63,1.64,8.52,8.21,8.52s8.21-3.89,8.21-8.52V.54h-6.03v15.99Z"></path><polygon points="198.05 14.65 208.51 14.65 208.51 9.72 198.05 9.72 198.05 5.46 210.18 5.46 210.18 .54 192.01 .54 192.01 24.51 210.38 24.51 210.38 19.58 198.05 19.58 198.05 14.65"></polygon><path d="M223.66,4.93c3.18,0,4.26,1.91,4.69,4.53h6.17C233.95,3.89,230.46,0,223.93,0c-7.58,0-11.63,5.26-11.63,12.6s3.86,12.44,11.47,12.44c6.6,0,10.22-4.02,10.76-9.52h-6.17c-.4,2.68-1.48,4.59-4.69,4.59-3.99,0-5.2-3.08-5.2-7.61s1.21-7.58,5.2-7.58Z"></path><polygon points="235.29 5.46 242.26 5.46 242.26 24.51 248.3 24.51 248.3 5.46 255.24 5.46 255.24 .54 235.29 .54 235.29 5.46"></polygon><path d="M281.79,6.26c-1.11-2-2.69-3.57-4.69-4.64-1.98-1.07-4.05-1.61-6.15-1.61s-4.16,.54-6.15,1.61c-2,1.08-3.58,2.64-4.7,4.64-1.11,1.99-1.68,4.11-1.68,6.27s.56,4.24,1.66,6.22c1.1,1.98,2.67,3.55,4.65,4.65,1.97,1.09,4.07,1.65,6.22,1.65s4.25-.55,6.23-1.65c1.98-1.1,3.54-2.66,4.64-4.65,1.09-1.98,1.65-4.07,1.65-6.22s-.56-4.28-1.67-6.27Zm-2.85,10.86c-.47,.85-1.08,1.58-1.78,2.22l-1.92-3.08c-.76-1.2-1.39-2.05-1.93-2.58-.03-.03-.06-.05-.09-.08,.63-.22,1.18-.56,1.64-1.03,.74-.77,1.11-1.69,1.11-2.73,0-.74-.22-1.46-.67-2.11-.45-.66-1.06-1.13-1.82-1.4-.72-.25-1.81-.38-3.35-.38h-4.79v13.5h3v-5.32h.7c.6,0,1.04,.11,1.33,.34,.33,.24,.93,.91,1.97,2.76l1.25,2.22h3.42c-.46,.4-.94,.76-1.49,1.07-1.46,.81-3.01,1.23-4.59,1.23s-3.13-.41-4.59-1.23c-1.46-.81-2.6-1.96-3.41-3.41-.81-1.45-1.23-3-1.23-4.58s.42-3.15,1.25-4.63c.82-1.47,1.98-2.61,3.44-3.4,1.47-.79,3-1.2,4.54-1.2s3.06,.4,4.53,1.2c1.46,.79,2.62,1.93,3.44,3.4,.82,1.48,1.24,3.03,1.24,4.63s-.41,3.13-1.22,4.58Zm-6.08-7.11c0,.43-.15,.76-.46,1.01-.23,.19-.78,.41-2.09,.41h-1.96v-2.8h1.81c1.15,0,1.64,.1,1.85,.18,.28,.11,.48,.27,.64,.48,.15,.21,.22,.44,.22,.71Z"></path></g></g>
                </Link>
            </svg>  
        </div>
    )
}

Logo.propTypes = {
    location: PropTypes.number
}