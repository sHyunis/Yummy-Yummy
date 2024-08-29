import styled from "styled-components";

export const LogoSvg = styled.svg`
  width: auto;
  height: 100%;
  aspect-ratio: 446 / 227;
`;

const Logo = ({ color }) => {
  return (
    <LogoSvg
      width="446"
      height="227"
      viewBox="0 0 446 227"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color || "var(--yellow-color)"}
    >
      <path
        d="M23.9 56.4C20.9 54.4667 18.1 51.9667 15.5 48.9C12.9667 45.7667 10.7 42.3333 8.7 38.6C6.76667 34.8667 5.13333 30.9667 3.8 26.9C2.53333 22.7667 1.6 18.7667 1 14.9C0.6 12.2333 0.766667 9.96667 1.5 8.1C2.23333 6.23333 3.33333 4.76666 4.8 3.7C6.26667 2.56666 7.96667 1.76666 9.9 1.3C11.8333 0.766663 13.8667 0.499995 16 0.499995C21.4667 0.499995 25.5333 1.76666 28.2 4.29999C30.9333 6.83333 32.5 10.9 32.9 16.5C32.9667 17.9667 33.1 19.6333 33.3 21.5C33.5667 23.3 33.8667 25.2 34.2 27.2C34.5333 29.2 34.9333 31.2667 35.4 33.4C35.8667 35.4667 36.4 37.4333 37 39.3C37.2 39.9 37.5 40.3 37.9 40.5C38.3 40.7 38.6667 40.7667 39 40.7C39.4 40.5667 39.7 40.3333 39.9 40C40.1667 39.6667 40.2333 39.2333 40.1 38.7C39.7667 37.2333 39.4333 35.5667 39.1 33.7C38.7667 31.8333 38.4333 29.9333 38.1 28C37.8333 26 37.6 24.1 37.4 22.3C37.2 20.5 37.0333 18.9333 36.9 17.6C36.5667 14.2 36.8 11.4 37.6 9.2C38.4 6.93333 39.6667 5.16667 41.4 3.9C43.1333 2.63333 45.2667 1.76666 47.8 1.3C50.3333 0.766663 53.1 0.499995 56.1 0.499995C63.2333 0.499995 68.3 2.1 71.3 5.3C74.3 8.43333 75.1667 12.8333 73.9 18.5C72.9667 22.5667 71.8 26.5667 70.4 30.5C69 34.3667 67.3667 38 65.5 41.4C63.7 44.7333 61.7333 47.7 59.6 50.3C57.4667 52.9 55.2667 54.9333 53 56.4C52.9333 57.3333 52.8667 58.5333 52.8 60C52.7333 61.4667 52.6667 63 52.6 64.6C52.5333 66.1333 52.4333 67.6333 52.3 69.1C52.2333 70.5667 52.1667 71.7333 52.1 72.6C51.9 74.4667 51.4667 76.2 50.8 77.8C50.1333 79.4667 49.2333 80.9 48.1 82.1C46.9667 83.3 45.6 84.2333 44 84.9C42.4 85.6333 40.5667 86 38.5 86C36.3667 86 34.4667 85.6333 32.8 84.9C31.2 84.2333 29.8333 83.3 28.7 82.1C27.5667 80.9 26.6667 79.4667 26 77.8C25.3333 76.2 24.9 74.4667 24.7 72.6C24.4333 69.8 24.2667 67.1 24.2 64.5C24.1333 61.9 24.0333 59.2 23.9 56.4ZM115.597 83.7C113.53 84.4333 111.197 85 108.597 85.4C105.997 85.8 103.43 86 100.897 86C96.8302 86 93.4969 85.4667 90.8969 84.4C87.8969 83.2667 85.5635 81.7667 83.8969 79.9C82.2969 78.1 81.1302 75.7 80.3969 72.7C79.4635 69.0333 79.0302 64.3333 79.0969 58.6C79.1635 52.8 79.2635 45.5333 79.3969 36.8C79.3969 34.7333 79.6635 32.8333 80.1969 31.1C80.7969 29.3667 81.7302 27.9 82.9969 26.7C84.2635 25.4333 85.8969 24.4667 87.8969 23.8C89.8969 23.1333 92.3635 22.8 95.2969 22.8C98.1635 22.8 100.564 23.1333 102.497 23.8C104.497 24.4667 106.097 25.4333 107.297 26.7C108.564 27.9 109.464 29.3667 109.997 31.1C110.53 32.8333 110.797 34.7333 110.797 36.8V57.7C110.864 58.5 111.097 59.1 111.497 59.5C111.897 59.8333 112.33 59.9667 112.797 59.9C113.264 59.8333 113.697 59.6 114.097 59.2C114.497 58.7333 114.697 58.1 114.697 57.3V36.1C114.697 34.2333 114.964 32.5 115.497 30.9C116.097 29.3 116.93 27.9 117.997 26.7C119.064 25.5 120.397 24.5667 121.997 23.9C123.597 23.1667 125.397 22.8 127.397 22.8C129.397 22.8 131.164 23.1667 132.697 23.9C134.297 24.5667 135.63 25.5 136.697 26.7C137.83 27.9 138.664 29.3 139.197 30.9C139.797 32.5 140.097 34.2333 140.097 36.1V68.4C140.23 70.0667 140.397 71.8333 140.597 73.7C140.797 75.5667 140.83 77.3333 140.697 79C140.564 80.6667 140.097 82.1333 139.297 83.4C138.564 84.6667 137.297 85.5 135.497 85.9C132.364 86.5667 129.73 86.9 127.597 86.9C124.864 86.9 122.73 86.5 121.197 85.7C119.73 84.9 118.597 83.9333 117.797 82.8C117.064 81.6667 116.564 80.4667 116.297 79.2C116.03 78 115.797 76.9667 115.597 76.1C115.464 75.7667 115.264 75.5333 114.997 75.4C114.797 75.2667 114.564 75.2333 114.297 75.3C114.097 75.3667 113.897 75.5333 113.697 75.8C113.564 76 113.53 76.2333 113.597 76.5C113.664 77.0333 113.764 77.6333 113.897 78.3C114.097 79.0333 114.297 79.7333 114.497 80.4C114.697 81.1333 114.864 81.8 114.997 82.4C115.197 83 115.397 83.4333 115.597 83.7ZM208.491 68.3C208.425 69.2333 208.358 70.1333 208.291 71C208.291 71.8667 208.225 72.7333 208.091 73.6C207.691 77.4 206.325 80.4 203.991 82.6C201.658 84.8667 198.291 86 193.891 86C189.491 86 186.125 84.8667 183.791 82.6C181.525 80.4 180.158 77.4 179.691 73.6C179.558 72.7333 179.458 71.8667 179.391 71C179.325 70.1333 179.258 69.2333 179.191 68.3C179.191 67.7 179.058 67.2333 178.791 66.9C178.525 66.5 178.225 66.2667 177.891 66.2C177.558 66.1333 177.225 66.2333 176.891 66.5C176.558 66.7 176.291 67.0333 176.091 67.5C175.958 68.5667 175.858 69.6 175.791 70.6C175.791 71.6 175.725 72.6 175.591 73.6C175.191 77.4 173.925 80.4 171.791 82.6C169.725 84.8667 166.591 86 162.391 86C158.125 86 154.858 84.8667 152.591 82.6C150.391 80.4 149.091 77.4 148.691 73.6C148.358 70.2667 148.091 66.8 147.891 63.2C147.758 59.5333 147.625 56.0333 147.491 52.7V34.8C147.491 31.2 148.591 28.3 150.791 26.1C152.991 23.9 155.891 22.8 159.491 22.8C162.358 22.8 165.058 23.2667 167.591 24.2C170.191 25.0667 172.025 26.6333 173.091 28.9C170.491 32.1 168.558 35.5 167.291 39.1C166.091 42.6333 165.691 46.3667 166.091 50.3C166.158 50.9 166.358 51.3667 166.691 51.7C167.025 51.9667 167.358 52.1 167.691 52.1C168.025 52.1 168.325 51.9667 168.591 51.7C168.858 51.4333 168.991 51.0333 168.991 50.5C168.791 47.9667 168.958 45.4333 169.491 42.9C170.025 40.3 170.825 37.9 171.891 35.7C172.958 33.5 174.225 31.5333 175.691 29.8C177.158 28 178.691 26.6333 180.291 25.7C181.691 24.7667 183.191 24.0667 184.791 23.6C186.391 23.0667 188.025 22.8 189.691 22.8C192.491 22.8 195.291 23.2667 198.091 24.2C200.891 25.0667 203.258 26.5667 205.191 28.7C202.991 31.5 201.391 34.5667 200.391 37.9C199.458 41.2333 199.091 44.7 199.291 48.3C199.558 49.5 200.091 50.0333 200.891 49.9C201.691 49.7 202.091 49.1333 202.091 48.2C201.958 45.7333 202.191 43.3333 202.791 41C203.391 38.6 204.191 36.4333 205.191 34.5C206.191 32.5 207.325 30.7333 208.591 29.2C209.858 27.6667 211.091 26.5 212.291 25.7C213.558 24.8333 215.091 24.1667 216.891 23.7C218.758 23.1667 220.725 22.9 222.791 22.9C225.991 22.9 228.858 23.5 231.391 24.7C233.991 25.9 236.258 27.8667 238.191 30.6C238.925 31.7333 239.525 32.9 239.991 34.1C240.458 35.2333 240.825 36.6667 241.091 38.4C241.358 40.0667 241.525 42.1667 241.591 44.7C241.658 47.1667 241.691 50.2667 241.691 54C241.691 56 241.658 57.8 241.591 59.4C241.525 60.9333 241.425 62.4667 241.291 64C241.158 65.4667 240.991 66.9667 240.791 68.5C240.658 70.0333 240.458 71.7333 240.191 73.6C239.658 77.4 238.291 80.4 236.091 82.6C233.891 84.8667 230.591 86 226.191 86C221.791 86 218.458 84.8667 216.191 82.6C213.991 80.4 212.658 77.4 212.191 73.6C212.058 72.7333 211.958 71.9 211.891 71.1C211.825 70.2333 211.758 69.3333 211.691 68.4C211.691 67.6667 211.525 67.1333 211.191 66.8C210.858 66.4 210.491 66.2 210.091 66.2C209.758 66.2 209.425 66.3667 209.091 66.7C208.758 67.0333 208.591 67.5667 208.591 68.3H208.491ZM309.37 68.3C309.304 69.2333 309.237 70.1333 309.17 71C309.17 71.8667 309.104 72.7333 308.97 73.6C308.57 77.4 307.204 80.4 304.87 82.6C302.537 84.8667 299.17 86 294.77 86C290.37 86 287.004 84.8667 284.67 82.6C282.404 80.4 281.037 77.4 280.57 73.6C280.437 72.7333 280.337 71.8667 280.27 71C280.204 70.1333 280.137 69.2333 280.07 68.3C280.07 67.7 279.937 67.2333 279.67 66.9C279.404 66.5 279.104 66.2667 278.77 66.2C278.437 66.1333 278.104 66.2333 277.77 66.5C277.437 66.7 277.17 67.0333 276.97 67.5C276.837 68.5667 276.737 69.6 276.67 70.6C276.67 71.6 276.604 72.6 276.47 73.6C276.07 77.4 274.804 80.4 272.67 82.6C270.604 84.8667 267.47 86 263.27 86C259.004 86 255.737 84.8667 253.47 82.6C251.27 80.4 249.97 77.4 249.57 73.6C249.237 70.2667 248.97 66.8 248.77 63.2C248.637 59.5333 248.504 56.0333 248.37 52.7V34.8C248.37 31.2 249.47 28.3 251.67 26.1C253.87 23.9 256.77 22.8 260.37 22.8C263.237 22.8 265.937 23.2667 268.47 24.2C271.07 25.0667 272.904 26.6333 273.97 28.9C271.37 32.1 269.437 35.5 268.17 39.1C266.97 42.6333 266.57 46.3667 266.97 50.3C267.037 50.9 267.237 51.3667 267.57 51.7C267.904 51.9667 268.237 52.1 268.57 52.1C268.904 52.1 269.204 51.9667 269.47 51.7C269.737 51.4333 269.87 51.0333 269.87 50.5C269.67 47.9667 269.837 45.4333 270.37 42.9C270.904 40.3 271.704 37.9 272.77 35.7C273.837 33.5 275.104 31.5333 276.57 29.8C278.037 28 279.57 26.6333 281.17 25.7C282.57 24.7667 284.07 24.0667 285.67 23.6C287.27 23.0667 288.904 22.8 290.57 22.8C293.37 22.8 296.17 23.2667 298.97 24.2C301.77 25.0667 304.137 26.5667 306.07 28.7C303.87 31.5 302.27 34.5667 301.27 37.9C300.337 41.2333 299.97 44.7 300.17 48.3C300.437 49.5 300.97 50.0333 301.77 49.9C302.57 49.7 302.97 49.1333 302.97 48.2C302.837 45.7333 303.07 43.3333 303.67 41C304.27 38.6 305.07 36.4333 306.07 34.5C307.07 32.5 308.204 30.7333 309.47 29.2C310.737 27.6667 311.97 26.5 313.17 25.7C314.437 24.8333 315.97 24.1667 317.77 23.7C319.637 23.1667 321.604 22.9 323.67 22.9C326.87 22.9 329.737 23.5 332.27 24.7C334.87 25.9 337.137 27.8667 339.07 30.6C339.804 31.7333 340.404 32.9 340.87 34.1C341.337 35.2333 341.704 36.6667 341.97 38.4C342.237 40.0667 342.404 42.1667 342.47 44.7C342.537 47.1667 342.57 50.2667 342.57 54C342.57 56 342.537 57.8 342.47 59.4C342.404 60.9333 342.304 62.4667 342.17 64C342.037 65.4667 341.87 66.9667 341.67 68.5C341.537 70.0333 341.337 71.7333 341.07 73.6C340.537 77.4 339.17 80.4 336.97 82.6C334.77 84.8667 331.47 86 327.07 86C322.67 86 319.337 84.8667 317.07 82.6C314.87 80.4 313.537 77.4 313.07 73.6C312.937 72.7333 312.837 71.9 312.77 71.1C312.704 70.2333 312.637 69.3333 312.57 68.4C312.57 67.6667 312.404 67.1333 312.07 66.8C311.737 66.4 311.37 66.2 310.97 66.2C310.637 66.2 310.304 66.3667 309.97 66.7C309.637 67.0333 309.47 67.5667 309.47 68.3H309.37ZM389.049 69C389.316 68.4 389.383 67.9333 389.249 67.6C389.116 67.2 388.883 66.9333 388.549 66.8C388.283 66.6667 387.949 66.6667 387.549 66.8C387.216 66.9333 386.949 67.2 386.749 67.6C384.816 70.7333 382.616 73.1 380.149 74.7C377.749 76.2333 374.716 77 371.049 77C368.049 77 365.083 76.4667 362.149 75.4C359.216 74.2667 356.616 72.6667 354.349 70.6C352.149 68.5333 350.416 66 349.149 63C347.949 59.9333 347.549 56.4333 347.949 52.5L350.249 32.7C350.583 29.7 351.749 27.3 353.749 25.5C355.816 23.7 358.349 22.8 361.349 22.8H367.949C370.949 22.8 373.149 23.7 374.549 25.5C375.949 27.2333 376.349 29.5667 375.749 32.5L371.349 53.5C371.216 53.9667 371.249 54.4 371.449 54.8C371.649 55.1333 371.916 55.3667 372.249 55.5C372.649 55.5667 373.049 55.5 373.449 55.3C373.849 55.1 374.149 54.7 374.349 54.1L379.249 32.5C379.916 29.5667 381.383 27.2333 383.649 25.5C385.983 23.7 388.649 22.8 391.649 22.8H397.849C401.449 22.8 404.349 23.9 406.549 26.1C408.816 28.3 409.949 31.2 409.949 34.8L410.049 62.9C410.116 75.4333 407.316 85.8333 401.649 94.1C400.116 96.2333 398.349 98.0667 396.349 99.6C394.416 101.2 392.283 102.5 389.949 103.5C387.683 104.5 385.283 105.233 382.749 105.7C380.216 106.233 377.649 106.5 375.049 106.5C374.249 106.5 373.183 106.433 371.849 106.3C370.516 106.233 369.049 106.067 367.449 105.8C365.849 105.6 364.216 105.333 362.549 105C360.949 104.667 359.516 104.267 358.249 103.8C356.449 103.133 355.049 102.233 354.049 101.1C353.049 99.9667 352.349 98.6667 351.949 97.2C351.616 95.8 351.516 94.3 351.649 92.7C351.783 91.1667 352.116 89.6667 352.649 88.2C353.116 86.8667 353.683 85.6 354.349 84.4C355.016 83.2 355.816 82.1667 356.749 81.3C357.683 80.4333 358.783 79.7667 360.049 79.3C361.316 78.9 362.749 78.8 364.349 79C365.283 79.1333 366.516 79.2333 368.049 79.3C369.649 79.4333 371.049 79.5 372.249 79.5C376.449 79.5 379.816 78.5333 382.349 76.6C384.949 74.6667 387.183 72.1333 389.049 69ZM23.9 176.4C20.9 174.467 18.1 171.967 15.5 168.9C12.9667 165.767 10.7 162.333 8.7 158.6C6.76667 154.867 5.13333 150.967 3.8 146.9C2.53333 142.767 1.6 138.767 1 134.9C0.6 132.233 0.766667 129.967 1.5 128.1C2.23333 126.233 3.33333 124.767 4.8 123.7C6.26667 122.567 7.96667 121.767 9.9 121.3C11.8333 120.767 13.8667 120.5 16 120.5C21.4667 120.5 25.5333 121.767 28.2 124.3C30.9333 126.833 32.5 130.9 32.9 136.5C32.9667 137.967 33.1 139.633 33.3 141.5C33.5667 143.3 33.8667 145.2 34.2 147.2C34.5333 149.2 34.9333 151.267 35.4 153.4C35.8667 155.467 36.4 157.433 37 159.3C37.2 159.9 37.5 160.3 37.9 160.5C38.3 160.7 38.6667 160.767 39 160.7C39.4 160.567 39.7 160.333 39.9 160C40.1667 159.667 40.2333 159.233 40.1 158.7C39.7667 157.233 39.4333 155.567 39.1 153.7C38.7667 151.833 38.4333 149.933 38.1 148C37.8333 146 37.6 144.1 37.4 142.3C37.2 140.5 37.0333 138.933 36.9 137.6C36.5667 134.2 36.8 131.4 37.6 129.2C38.4 126.933 39.6667 125.167 41.4 123.9C43.1333 122.633 45.2667 121.767 47.8 121.3C50.3333 120.767 53.1 120.5 56.1 120.5C63.2333 120.5 68.3 122.1 71.3 125.3C74.3 128.433 75.1667 132.833 73.9 138.5C72.9667 142.567 71.8 146.567 70.4 150.5C69 154.367 67.3667 158 65.5 161.4C63.7 164.733 61.7333 167.7 59.6 170.3C57.4667 172.9 55.2667 174.933 53 176.4C52.9333 177.333 52.8667 178.533 52.8 180C52.7333 181.467 52.6667 183 52.6 184.6C52.5333 186.133 52.4333 187.633 52.3 189.1C52.2333 190.567 52.1667 191.733 52.1 192.6C51.9 194.467 51.4667 196.2 50.8 197.8C50.1333 199.467 49.2333 200.9 48.1 202.1C46.9667 203.3 45.6 204.233 44 204.9C42.4 205.633 40.5667 206 38.5 206C36.3667 206 34.4667 205.633 32.8 204.9C31.2 204.233 29.8333 203.3 28.7 202.1C27.5667 200.9 26.6667 199.467 26 197.8C25.3333 196.2 24.9 194.467 24.7 192.6C24.4333 189.8 24.2667 187.1 24.2 184.5C24.1333 181.9 24.0333 179.2 23.9 176.4ZM115.597 203.7C113.53 204.433 111.197 205 108.597 205.4C105.997 205.8 103.43 206 100.897 206C96.8302 206 93.4969 205.467 90.8969 204.4C87.8969 203.267 85.5635 201.767 83.8969 199.9C82.2969 198.1 81.1302 195.7 80.3969 192.7C79.4635 189.033 79.0302 184.333 79.0969 178.6C79.1635 172.8 79.2635 165.533 79.3969 156.8C79.3969 154.733 79.6635 152.833 80.1969 151.1C80.7969 149.367 81.7302 147.9 82.9969 146.7C84.2635 145.433 85.8969 144.467 87.8969 143.8C89.8969 143.133 92.3635 142.8 95.2969 142.8C98.1635 142.8 100.564 143.133 102.497 143.8C104.497 144.467 106.097 145.433 107.297 146.7C108.564 147.9 109.464 149.367 109.997 151.1C110.53 152.833 110.797 154.733 110.797 156.8V177.7C110.864 178.5 111.097 179.1 111.497 179.5C111.897 179.833 112.33 179.967 112.797 179.9C113.264 179.833 113.697 179.6 114.097 179.2C114.497 178.733 114.697 178.1 114.697 177.3V156.1C114.697 154.233 114.964 152.5 115.497 150.9C116.097 149.3 116.93 147.9 117.997 146.7C119.064 145.5 120.397 144.567 121.997 143.9C123.597 143.167 125.397 142.8 127.397 142.8C129.397 142.8 131.164 143.167 132.697 143.9C134.297 144.567 135.63 145.5 136.697 146.7C137.83 147.9 138.664 149.3 139.197 150.9C139.797 152.5 140.097 154.233 140.097 156.1V188.4C140.23 190.067 140.397 191.833 140.597 193.7C140.797 195.567 140.83 197.333 140.697 199C140.564 200.667 140.097 202.133 139.297 203.4C138.564 204.667 137.297 205.5 135.497 205.9C132.364 206.567 129.73 206.9 127.597 206.9C124.864 206.9 122.73 206.5 121.197 205.7C119.73 204.9 118.597 203.933 117.797 202.8C117.064 201.667 116.564 200.467 116.297 199.2C116.03 198 115.797 196.967 115.597 196.1C115.464 195.767 115.264 195.533 114.997 195.4C114.797 195.267 114.564 195.233 114.297 195.3C114.097 195.367 113.897 195.533 113.697 195.8C113.564 196 113.53 196.233 113.597 196.5C113.664 197.033 113.764 197.633 113.897 198.3C114.097 199.033 114.297 199.733 114.497 200.4C114.697 201.133 114.864 201.8 114.997 202.4C115.197 203 115.397 203.433 115.597 203.7ZM208.491 188.3C208.425 189.233 208.358 190.133 208.291 191C208.291 191.867 208.225 192.733 208.091 193.6C207.691 197.4 206.325 200.4 203.991 202.6C201.658 204.867 198.291 206 193.891 206C189.491 206 186.125 204.867 183.791 202.6C181.525 200.4 180.158 197.4 179.691 193.6C179.558 192.733 179.458 191.867 179.391 191C179.325 190.133 179.258 189.233 179.191 188.3C179.191 187.7 179.058 187.233 178.791 186.9C178.525 186.5 178.225 186.267 177.891 186.2C177.558 186.133 177.225 186.233 176.891 186.5C176.558 186.7 176.291 187.033 176.091 187.5C175.958 188.567 175.858 189.6 175.791 190.6C175.791 191.6 175.725 192.6 175.591 193.6C175.191 197.4 173.925 200.4 171.791 202.6C169.725 204.867 166.591 206 162.391 206C158.125 206 154.858 204.867 152.591 202.6C150.391 200.4 149.091 197.4 148.691 193.6C148.358 190.267 148.091 186.8 147.891 183.2C147.758 179.533 147.625 176.033 147.491 172.7V154.8C147.491 151.2 148.591 148.3 150.791 146.1C152.991 143.9 155.891 142.8 159.491 142.8C162.358 142.8 165.058 143.267 167.591 144.2C170.191 145.067 172.025 146.633 173.091 148.9C170.491 152.1 168.558 155.5 167.291 159.1C166.091 162.633 165.691 166.367 166.091 170.3C166.158 170.9 166.358 171.367 166.691 171.7C167.025 171.967 167.358 172.1 167.691 172.1C168.025 172.1 168.325 171.967 168.591 171.7C168.858 171.433 168.991 171.033 168.991 170.5C168.791 167.967 168.958 165.433 169.491 162.9C170.025 160.3 170.825 157.9 171.891 155.7C172.958 153.5 174.225 151.533 175.691 149.8C177.158 148 178.691 146.633 180.291 145.7C181.691 144.767 183.191 144.067 184.791 143.6C186.391 143.067 188.025 142.8 189.691 142.8C192.491 142.8 195.291 143.267 198.091 144.2C200.891 145.067 203.258 146.567 205.191 148.7C202.991 151.5 201.391 154.567 200.391 157.9C199.458 161.233 199.091 164.7 199.291 168.3C199.558 169.5 200.091 170.033 200.891 169.9C201.691 169.7 202.091 169.133 202.091 168.2C201.958 165.733 202.191 163.333 202.791 161C203.391 158.6 204.191 156.433 205.191 154.5C206.191 152.5 207.325 150.733 208.591 149.2C209.858 147.667 211.091 146.5 212.291 145.7C213.558 144.833 215.091 144.167 216.891 143.7C218.758 143.167 220.725 142.9 222.791 142.9C225.991 142.9 228.858 143.5 231.391 144.7C233.991 145.9 236.258 147.867 238.191 150.6C238.925 151.733 239.525 152.9 239.991 154.1C240.458 155.233 240.825 156.667 241.091 158.4C241.358 160.067 241.525 162.167 241.591 164.7C241.658 167.167 241.691 170.267 241.691 174C241.691 176 241.658 177.8 241.591 179.4C241.525 180.933 241.425 182.467 241.291 184C241.158 185.467 240.991 186.967 240.791 188.5C240.658 190.033 240.458 191.733 240.191 193.6C239.658 197.4 238.291 200.4 236.091 202.6C233.891 204.867 230.591 206 226.191 206C221.791 206 218.458 204.867 216.191 202.6C213.991 200.4 212.658 197.4 212.191 193.6C212.058 192.733 211.958 191.9 211.891 191.1C211.825 190.233 211.758 189.333 211.691 188.4C211.691 187.667 211.525 187.133 211.191 186.8C210.858 186.4 210.491 186.2 210.091 186.2C209.758 186.2 209.425 186.367 209.091 186.7C208.758 187.033 208.591 187.567 208.591 188.3H208.491ZM309.37 188.3C309.304 189.233 309.237 190.133 309.17 191C309.17 191.867 309.104 192.733 308.97 193.6C308.57 197.4 307.204 200.4 304.87 202.6C302.537 204.867 299.17 206 294.77 206C290.37 206 287.004 204.867 284.67 202.6C282.404 200.4 281.037 197.4 280.57 193.6C280.437 192.733 280.337 191.867 280.27 191C280.204 190.133 280.137 189.233 280.07 188.3C280.07 187.7 279.937 187.233 279.67 186.9C279.404 186.5 279.104 186.267 278.77 186.2C278.437 186.133 278.104 186.233 277.77 186.5C277.437 186.7 277.17 187.033 276.97 187.5C276.837 188.567 276.737 189.6 276.67 190.6C276.67 191.6 276.604 192.6 276.47 193.6C276.07 197.4 274.804 200.4 272.67 202.6C270.604 204.867 267.47 206 263.27 206C259.004 206 255.737 204.867 253.47 202.6C251.27 200.4 249.97 197.4 249.57 193.6C249.237 190.267 248.97 186.8 248.77 183.2C248.637 179.533 248.504 176.033 248.37 172.7V154.8C248.37 151.2 249.47 148.3 251.67 146.1C253.87 143.9 256.77 142.8 260.37 142.8C263.237 142.8 265.937 143.267 268.47 144.2C271.07 145.067 272.904 146.633 273.97 148.9C271.37 152.1 269.437 155.5 268.17 159.1C266.97 162.633 266.57 166.367 266.97 170.3C267.037 170.9 267.237 171.367 267.57 171.7C267.904 171.967 268.237 172.1 268.57 172.1C268.904 172.1 269.204 171.967 269.47 171.7C269.737 171.433 269.87 171.033 269.87 170.5C269.67 167.967 269.837 165.433 270.37 162.9C270.904 160.3 271.704 157.9 272.77 155.7C273.837 153.5 275.104 151.533 276.57 149.8C278.037 148 279.57 146.633 281.17 145.7C282.57 144.767 284.07 144.067 285.67 143.6C287.27 143.067 288.904 142.8 290.57 142.8C293.37 142.8 296.17 143.267 298.97 144.2C301.77 145.067 304.137 146.567 306.07 148.7C303.87 151.5 302.27 154.567 301.27 157.9C300.337 161.233 299.97 164.7 300.17 168.3C300.437 169.5 300.97 170.033 301.77 169.9C302.57 169.7 302.97 169.133 302.97 168.2C302.837 165.733 303.07 163.333 303.67 161C304.27 158.6 305.07 156.433 306.07 154.5C307.07 152.5 308.204 150.733 309.47 149.2C310.737 147.667 311.97 146.5 313.17 145.7C314.437 144.833 315.97 144.167 317.77 143.7C319.637 143.167 321.604 142.9 323.67 142.9C326.87 142.9 329.737 143.5 332.27 144.7C334.87 145.9 337.137 147.867 339.07 150.6C339.804 151.733 340.404 152.9 340.87 154.1C341.337 155.233 341.704 156.667 341.97 158.4C342.237 160.067 342.404 162.167 342.47 164.7C342.537 167.167 342.57 170.267 342.57 174C342.57 176 342.537 177.8 342.47 179.4C342.404 180.933 342.304 182.467 342.17 184C342.037 185.467 341.87 186.967 341.67 188.5C341.537 190.033 341.337 191.733 341.07 193.6C340.537 197.4 339.17 200.4 336.97 202.6C334.77 204.867 331.47 206 327.07 206C322.67 206 319.337 204.867 317.07 202.6C314.87 200.4 313.537 197.4 313.07 193.6C312.937 192.733 312.837 191.9 312.77 191.1C312.704 190.233 312.637 189.333 312.57 188.4C312.57 187.667 312.404 187.133 312.07 186.8C311.737 186.4 311.37 186.2 310.97 186.2C310.637 186.2 310.304 186.367 309.97 186.7C309.637 187.033 309.47 187.567 309.47 188.3H309.37ZM389.049 189C389.316 188.4 389.383 187.933 389.249 187.6C389.116 187.2 388.883 186.933 388.549 186.8C388.283 186.667 387.949 186.667 387.549 186.8C387.216 186.933 386.949 187.2 386.749 187.6C384.816 190.733 382.616 193.1 380.149 194.7C377.749 196.233 374.716 197 371.049 197C368.049 197 365.083 196.467 362.149 195.4C359.216 194.267 356.616 192.667 354.349 190.6C352.149 188.533 350.416 186 349.149 183C347.949 179.933 347.549 176.433 347.949 172.5L350.249 152.7C350.583 149.7 351.749 147.3 353.749 145.5C355.816 143.7 358.349 142.8 361.349 142.8H367.949C370.949 142.8 373.149 143.7 374.549 145.5C375.949 147.233 376.349 149.567 375.749 152.5L371.349 173.5C371.216 173.967 371.249 174.4 371.449 174.8C371.649 175.133 371.916 175.367 372.249 175.5C372.649 175.567 373.049 175.5 373.449 175.3C373.849 175.1 374.149 174.7 374.349 174.1L379.249 152.5C379.916 149.567 381.383 147.233 383.649 145.5C385.983 143.7 388.649 142.8 391.649 142.8H397.849C401.449 142.8 404.349 143.9 406.549 146.1C408.816 148.3 409.949 151.2 409.949 154.8L410.049 182.9C410.116 195.433 407.316 205.833 401.649 214.1C400.116 216.233 398.349 218.067 396.349 219.6C394.416 221.2 392.283 222.5 389.949 223.5C387.683 224.5 385.283 225.233 382.749 225.7C380.216 226.233 377.649 226.5 375.049 226.5C374.249 226.5 373.183 226.433 371.849 226.3C370.516 226.233 369.049 226.067 367.449 225.8C365.849 225.6 364.216 225.333 362.549 225C360.949 224.667 359.516 224.267 358.249 223.8C356.449 223.133 355.049 222.233 354.049 221.1C353.049 219.967 352.349 218.667 351.949 217.2C351.616 215.8 351.516 214.3 351.649 212.7C351.783 211.167 352.116 209.667 352.649 208.2C353.116 206.867 353.683 205.6 354.349 204.4C355.016 203.2 355.816 202.167 356.749 201.3C357.683 200.433 358.783 199.767 360.049 199.3C361.316 198.9 362.749 198.8 364.349 199C365.283 199.133 366.516 199.233 368.049 199.3C369.649 199.433 371.049 199.5 372.249 199.5C376.449 199.5 379.816 198.533 382.349 196.6C384.949 194.667 387.183 192.133 389.049 189ZM420.43 168.4C419.696 161.933 419.096 155.5 418.63 149.1C418.163 142.633 418.063 135.9 418.33 128.9C418.463 125.5 419.763 122.767 422.23 120.7C424.696 118.567 427.93 117.5 431.93 117.5C435.93 117.5 439.163 118.567 441.63 120.7C444.096 122.767 445.396 125.5 445.53 128.9C445.73 135.9 445.596 142.633 445.13 149.1C444.663 155.5 444.063 161.933 443.33 168.4C442.996 171.467 441.896 173.933 440.03 175.8C438.23 177.667 435.53 178.6 431.93 178.6C428.33 178.6 425.596 177.667 423.73 175.8C421.863 173.933 420.763 171.467 420.43 168.4ZM418.63 196.9C418.63 192.7 419.83 189.367 422.23 186.9C424.696 184.433 427.93 183.2 431.93 183.2C435.996 183.2 439.23 184.433 441.63 186.9C444.03 189.367 445.23 192.7 445.23 196.9C445.23 198.633 444.896 200.2 444.23 201.6C443.563 203.067 442.63 204.333 441.43 205.4C440.296 206.467 438.896 207.3 437.23 207.9C435.63 208.5 433.863 208.8 431.93 208.8C429.996 208.8 428.196 208.5 426.53 207.9C424.93 207.3 423.53 206.467 422.33 205.4C421.196 204.333 420.296 203.067 419.63 201.6C418.963 200.2 418.63 198.633 418.63 196.9Z"
        fill="currentColor"
      />
    </LogoSvg>
  );
};

export default Logo;
