import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* -------------------- RESET -------------------- */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
/* -------------------- PRE-SETTINGS -------------------- */
  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Poppins', sans-serif;
  }

/* -------------------- COLORS -------------------- */
  :root {
    --Linear: linear-gradient(195.96deg, #5498FF -122.01%, #428EFF -8.36%, #297FFF 98.4%);
    --Black: #0D114F;
    --White: #FFFFFF;
    --Red: #E83F5B;
    --LightBlue: #E0ECFF;
    --Blue: #3485FF;
    --Background: #FBFCFF;
    --Overlay: #4D5E77;
    --Grey: #dddddd;
    --GreyLight: #E5EAF1;
    --GreyBlue: #A1B2CD;
    --HoverBlue: #5699FF;
    --HoverRed: #EA4B65;
  }
`;