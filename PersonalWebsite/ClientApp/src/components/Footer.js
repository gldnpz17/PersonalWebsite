import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import SocialButton from "./SocialButton";

const StyledFooterRow = styled(Row)`
  background-color: #1c313a;
  color: white;
`;

export default class Footer extends React.Component {
  render() {
    return(
      <StyledFooterRow className="p-3 w-100 m-0 align-self-end">
        <Col className="d-flex mr-auto p-0">
          <span className="mr-2">
            <SocialButton href="https://github.com/gldnpz17">
              <svg width="24" height="24" fill="#e6e6e6">
                <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                <path d="M14.877 21.487a.472.472 0 01-.298-.217c-.044-.08-.05-.265-.065-1.81l-.016-1.72-.076-.281a2.3 2.3 0 00-.4-.847c-.137-.178-.14-.187-.078-.2.036-.007.241-.041.456-.075 2.349-.374 3.601-1.568 3.92-3.738.072-.49.086-1.336.03-1.72-.11-.742-.4-1.404-.845-1.933l-.125-.149.075-.285c.1-.38.126-1.045.057-1.48-.043-.274-.186-.777-.248-.873-.022-.034-.084-.042-.282-.038-.288.007-.683.098-1.037.24a8.78 8.78 0 00-1.192.625l-.25.163-.324-.076a9.81 9.81 0 00-4.349 0l-.333.076-.25-.163c-.797-.52-1.654-.852-2.229-.865-.198-.004-.26.004-.282.038-.058.09-.2.583-.247.853-.071.42-.046 1.116.056 1.5l.075.285-.125.149a3.845 3.845 0 00-.845 1.933c-.057.386-.042 1.236.03 1.72.26 1.753 1.11 2.855 2.648 3.429a8.27 8.27 0 001.638.382l.149.019-.138.182c-.182.24-.313.523-.383.825a2.62 2.62 0 01-.078.287c-.055.108-.716.263-1.125.263-.738 0-1.25-.305-1.725-1.028-.411-.626-.855-.956-1.418-1.053-.216-.037-.494.002-.573.082-.119.119-.013.27.383.551.155.11.347.276.427.369.278.324.384.506.7 1.206.27.594.834 1.052 1.521 1.234.327.086.96.106 1.401.044.183-.025.342-.046.354-.046.013 0 .023.4.023.891 0 .872-.001.895-.065 1.017-.141.266-.417.297-.932.104-.403-.15-1.384-.64-1.757-.876-2.705-1.712-4.413-4.51-4.679-7.665-.044-.522-.02-1.636.043-2.088.393-2.76 1.751-5.082 3.936-6.724 1.367-1.028 2.89-1.646 4.712-1.913.498-.073 2.018-.073 2.516 0 2.323.34 4.225 1.279 5.814 2.87 1.555 1.556 2.516 3.515 2.836 5.781.076.534.076 1.942.001 2.501-.305 2.273-1.282 4.248-2.896 5.856a9.925 9.925 0 01-3.427 2.226c-.414.162-.568.197-.71.162z"/>
              </svg>
            </SocialButton>
          </span>
          <div className="mr-2">  
            <SocialButton className="mr-2" href="https://instagram.com">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#e6e6e6">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </SocialButton>
          </div>
          <span className="mr-2">  
            <SocialButton className="mr-2" href="https://web.facebook.com/firdausbisma17">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#e6e6e6">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </SocialButton>
          </span>
          <span className="mr-2">  
            <SocialButton className="mr-2" href="https://twitter.com/gldnpz">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#e6e6e6">
                <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
              </svg>
            </SocialButton>
          </span>
          <span className="mr-2">  
            <SocialButton className="mr-2" href="https://steamcommunity.com/id/gldnpz/">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#e6e6e6">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C7.4,22 3.55,18.92 2.36,14.73L6.19,16.31C6.45,17.6 7.6,18.58 8.97,18.58C10.53,18.58 11.8,17.31 11.8,15.75V15.62L15.2,13.19H15.28C17.36,13.19 19.05,11.5 19.05,9.42C19.05,7.34 17.36,5.65 15.28,5.65C13.2,5.65 11.5,7.34 11.5,9.42V9.47L9.13,12.93L8.97,12.92C8.38,12.92 7.83,13.1 7.38,13.41L2,11.2C2.43,6.05 6.73,2 12,2M8.28,17.17C9.08,17.5 10,17.13 10.33,16.33C10.66,15.53 10.28,14.62 9.5,14.29L8.22,13.76C8.71,13.58 9.26,13.57 9.78,13.79C10.31,14 10.72,14.41 10.93,14.94C11.15,15.46 11.15,16.04 10.93,16.56C10.5,17.64 9.23,18.16 8.15,17.71C7.65,17.5 7.27,17.12 7.06,16.67L8.28,17.17M17.8,9.42C17.8,10.81 16.67,11.94 15.28,11.94C13.9,11.94 12.77,10.81 12.77,9.42A2.5,2.5 0 0,1 15.28,6.91C16.67,6.91 17.8,8.04 17.8,9.42M13.4,9.42C13.4,10.46 14.24,11.31 15.29,11.31C16.33,11.31 17.17,10.46 17.17,9.42C17.17,8.38 16.33,7.53 15.29,7.53C14.24,7.53 13.4,8.38 13.4,9.42Z" />
              </svg>
            </SocialButton>
          </span>
        </Col>
        <Col className="col-auto p-0">
          <p className="text-right m-0">©Firdaus Bisma S</p>
        </Col>
      </StyledFooterRow>
    );
  }
}