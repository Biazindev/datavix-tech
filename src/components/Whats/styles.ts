import { styled } from "styled-components";

export const Whats = styled.div`
    img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 1000; animation: pulse 5s infinite;
}

        @keyframes pulse {
        30% {
            transform: scale(1);
        }
        40% {
            transform: scale(1.1);
        }
        60% {
            transform: scale(1.2);
        }
        80% {
            transform: scale(1.3);
        }
        100% {
            transform: scale(1.4);
        }
    }
        
`