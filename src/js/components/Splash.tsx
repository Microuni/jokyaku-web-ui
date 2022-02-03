import React from 'react'
import logo from '../../assets/logo.svg'

function Splash() {
  return (
    <div className="Splash" dangerouslySetInnerHTML={{
      __html: '<svg class="Logo" width="202" height="63" viewBox="0 0 202 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.312 41.536C11.312 44.0373 11.0693 45.9787 10.584 47.36C10.136 48.7413 9.408 49.712 8.4 50.272C7.392 50.7947 6.02933 51.056 4.312 51.056L0 51C-0.149333 51 -0.261333 50.9813 -0.336 50.944C-0.410667 50.9067 -0.448 50.832 -0.448 50.72V49.432C-0.448 49.208 -0.298667 49.096 0 49.096C0.634667 49.096 1.30667 49.096 2.016 49.096C2.72533 49.096 3.39733 49.096 4.032 49.096C5.63733 49.096 6.85067 48.6853 7.672 47.864C8.49333 47.0053 8.92267 45.4187 8.96 43.104V13.592C8.96 13.4053 9.03467 13.312 9.184 13.312H11.088C11.1627 13.312 11.2187 13.3307 11.256 13.368C11.2933 13.4053 11.312 13.48 11.312 13.592V41.536ZM56.7848 51C56.6355 51 56.5608 50.9253 56.5608 50.776C56.5608 44.5413 56.5608 38.3253 56.5608 32.128C56.5608 25.9307 56.5608 19.7333 56.5608 13.536C56.5608 13.3867 56.6355 13.312 56.7848 13.312C56.8968 13.312 57.0275 13.312 57.1768 13.312C57.3261 13.312 57.4941 13.312 57.6808 13.312C57.9048 13.312 58.0915 13.312 58.2408 13.312C58.4275 13.312 58.5768 13.312 58.6888 13.312C58.8381 13.312 58.9128 13.3867 58.9128 13.536C58.9128 14.9547 58.9128 16.3733 58.9128 17.792C58.9128 19.1733 58.9128 20.5733 58.9128 21.992C58.9128 23.3733 58.9128 24.7733 58.9128 26.192C58.9128 27.6107 58.9128 29.0293 58.9128 30.448C58.9128 30.56 58.9315 30.672 58.9688 30.784C59.0061 30.8587 59.1181 30.896 59.3048 30.896H64.9608C65.2595 30.896 65.4648 30.8587 65.5768 30.784C65.7261 30.672 65.8568 30.5413 65.9688 30.392C66.7155 28.9733 67.4435 27.5547 68.1528 26.136C68.8621 24.7173 69.5715 23.336 70.2808 21.992C71.0275 20.6107 71.7555 19.2293 72.4648 17.848C73.1741 16.4293 73.9021 15.0107 74.6488 13.592C74.6861 13.5173 74.7235 13.4613 74.7608 13.424C74.7981 13.3493 74.8355 13.312 74.8728 13.312C74.9848 13.312 75.1341 13.312 75.3208 13.312C75.5075 13.312 75.6755 13.312 75.8248 13.312C76.0115 13.312 76.1981 13.312 76.3848 13.312C76.5715 13.312 76.7208 13.312 76.8328 13.312C76.9448 13.312 77.0195 13.3493 77.0568 13.424C77.0941 13.4987 77.0755 13.592 77.0008 13.704C75.9928 15.6453 74.9848 17.5867 73.9768 19.528C73.0061 21.4693 72.0168 23.4107 71.0088 25.352C70.0381 27.2933 69.0488 29.2533 68.0408 31.232C67.8915 31.568 67.7981 31.848 67.7608 32.072C67.7235 32.2587 67.7048 32.4453 67.7048 32.632C67.7795 33.7147 68.0221 34.928 68.4328 36.272C68.8808 37.5787 69.4221 38.904 70.0568 40.248C70.7288 41.5547 71.4381 42.7867 72.1848 43.944C72.9688 45.064 73.7528 45.9787 74.5368 46.688C75.3581 47.36 76.2168 47.92 77.1128 48.368C78.0088 48.7787 78.9421 48.984 79.9128 48.984C79.9875 48.984 80.0808 49.0027 80.1928 49.04C80.3048 49.0773 80.3608 49.1333 80.3608 49.208V50.72C80.3608 50.9067 80.3048 51 80.1928 51C78.7368 51 77.4115 50.776 76.2168 50.328C75.0221 49.8427 73.9395 49.1893 72.9688 48.368C72.1101 47.6587 71.2701 46.7253 70.4488 45.568C69.6275 44.3733 68.8621 43.0853 68.1528 41.704C67.4808 40.3227 66.9021 38.96 66.4168 37.616C65.9688 36.2347 65.6701 34.984 65.5208 33.864C65.4835 33.5653 65.3901 33.3973 65.2408 33.36C65.1288 33.2853 65.0168 33.248 64.9048 33.248C63.9715 33.248 63.0381 33.248 62.1048 33.248C61.1715 33.248 60.2381 33.248 59.3048 33.248C59.3048 33.248 59.2301 33.2667 59.0808 33.304C58.9688 33.3413 58.9128 33.4533 58.9128 33.64C58.9128 35.096 58.9128 36.5333 58.9128 37.952C58.9128 39.3707 58.9128 40.7893 58.9128 42.208C58.9128 43.6267 58.9128 45.0453 58.9128 46.464C58.9128 47.8827 58.9128 49.32 58.9128 50.776C58.9128 50.9253 58.8381 51 58.6888 51C58.5768 51 58.4275 51 58.2408 51C58.0915 51 57.9048 51 57.6808 51C57.4941 51 57.3261 51 57.1768 51C57.0275 51 56.8968 51 56.7848 51ZM95.2384 33.528C95.0144 33.8267 94.8464 34.256 94.7344 34.816C94.6598 35.3387 94.6224 35.8053 94.6224 36.216V50.72C94.6224 50.832 94.5851 50.9067 94.5104 50.944C94.4731 50.9813 94.4171 51 94.3424 51H92.4944C92.3451 51 92.2704 50.9067 92.2704 50.72V36.328C92.2704 35.8053 92.1958 35.264 92.0464 34.704C91.9344 34.144 91.7478 33.6773 91.4864 33.304C91.0758 32.7813 90.6278 32.2027 90.1424 31.568C89.6944 30.896 89.2464 30.224 88.7984 29.552C88.3504 28.8427 87.9398 28.1893 87.5664 27.592C87.2304 26.9573 86.9504 26.4347 86.7264 26.024C85.6811 24.0453 84.7664 22.16 83.9824 20.368C83.2358 18.576 82.6384 17.0827 82.1904 15.888C81.7798 14.6933 81.5371 13.984 81.4624 13.76C81.4251 13.6107 81.4251 13.4987 81.4624 13.424C81.5371 13.3493 81.6304 13.312 81.7424 13.312H83.4784C83.6278 13.312 83.7584 13.48 83.8704 13.816C83.9078 13.928 84.1504 14.544 84.5984 15.664C85.0464 16.784 85.6251 18.1653 86.3344 19.808C87.0811 21.4507 87.8838 23.1307 88.7424 24.848C89.1904 25.8187 89.7504 26.864 90.4224 27.984C91.1318 29.104 91.9158 30.2427 92.7744 31.4C92.9611 31.6613 93.1291 31.8293 93.2784 31.904C93.4278 31.9787 93.6331 31.8293 93.8944 31.456C94.4171 30.8213 94.9398 30.0933 95.4624 29.272C96.0224 28.4133 96.5451 27.5547 97.0304 26.696C97.5531 25.8 97.9824 25.0533 98.3184 24.456C99.1398 22.8133 99.8678 21.208 100.502 19.64C101.174 18.0347 101.697 16.6907 102.07 15.608C102.481 14.5253 102.705 13.928 102.742 13.816C102.817 13.6293 102.873 13.4987 102.91 13.424C102.985 13.3493 103.06 13.312 103.134 13.312H104.926C105.001 13.312 105.057 13.3493 105.094 13.424C105.169 13.4987 105.188 13.6107 105.15 13.76C105.113 13.984 104.889 14.6747 104.478 15.832C104.068 16.952 103.508 18.3707 102.798 20.088C102.089 21.768 101.212 23.5787 100.166 25.52C99.9424 26.0053 99.6438 26.584 99.2704 27.256C98.8971 27.928 98.4864 28.6373 98.0384 29.384C97.5904 30.1307 97.1238 30.8773 96.6384 31.624C96.1531 32.3333 95.6864 32.968 95.2384 33.528ZM109.123 51C108.974 51 108.88 50.9813 108.843 50.944C108.843 50.8693 108.843 50.7387 108.843 50.552C109.104 48.76 109.496 46.6133 110.019 44.112C110.542 41.5733 111.158 38.8853 111.867 36.048C112.576 33.1733 113.323 30.336 114.107 27.536C114.928 24.6987 115.768 22.0667 116.627 19.64C117.486 17.2133 118.307 15.1973 119.091 13.592C119.166 13.5173 119.24 13.4613 119.315 13.424C119.39 13.3493 119.483 13.312 119.595 13.312H123.851C123.963 13.312 124.075 13.3307 124.187 13.368C124.299 13.4053 124.374 13.4987 124.411 13.648C125.12 15.1413 125.886 17.12 126.707 19.584C127.566 22.048 128.406 24.7173 129.227 27.592C130.048 30.4293 130.814 33.304 131.523 36.216C132.27 39.128 132.904 41.8347 133.427 44.336C133.95 46.8 134.323 48.8533 134.547 50.496C134.584 50.72 134.584 50.8693 134.547 50.944C134.547 50.9813 134.491 51 134.379 51H132.475C132.4 51 132.344 50.9813 132.307 50.944C132.27 50.8693 132.214 50.7573 132.139 50.608C131.99 49.5253 131.766 48.256 131.467 46.8C131.206 45.344 130.907 43.7573 130.571 42.04C130.534 41.8533 130.459 41.7227 130.347 41.648C130.235 41.5733 130.067 41.536 129.843 41.536H113.547C113.36 41.5733 113.211 41.6293 113.099 41.704C113.024 41.7787 112.95 41.928 112.875 42.152C112.502 43.7947 112.166 45.344 111.867 46.8C111.606 48.256 111.382 49.544 111.195 50.664C111.195 50.776 111.176 50.8693 111.139 50.944C111.139 50.9813 111.064 51 110.915 51H109.123ZM114.051 39.52H129.283C129.432 39.52 129.563 39.464 129.675 39.352C129.787 39.2027 129.806 38.9413 129.731 38.568C128.76 34.76 127.771 30.9707 126.763 27.2C125.755 23.392 124.504 19.7147 123.011 16.168C122.936 15.944 122.75 15.832 122.451 15.832H121.107C120.808 15.832 120.622 15.9627 120.547 16.224C119.8 17.9413 118.998 20.0693 118.139 22.608C117.318 25.1093 116.515 27.7787 115.731 30.616C114.984 33.4533 114.294 36.216 113.659 38.904C113.622 39.016 113.622 39.1467 113.659 39.296C113.696 39.4453 113.827 39.52 114.051 39.52ZM142.425 51C142.276 51 142.201 50.9253 142.201 50.776C142.201 44.5413 142.201 38.3253 142.201 32.128C142.201 25.9307 142.201 19.7333 142.201 13.536C142.201 13.3867 142.276 13.312 142.425 13.312C142.537 13.312 142.668 13.312 142.817 13.312C142.967 13.312 143.135 13.312 143.321 13.312C143.545 13.312 143.732 13.312 143.881 13.312C144.068 13.312 144.217 13.312 144.329 13.312C144.479 13.312 144.553 13.3867 144.553 13.536C144.553 14.9547 144.553 16.3733 144.553 17.792C144.553 19.1733 144.553 20.5733 144.553 21.992C144.553 23.3733 144.553 24.7733 144.553 26.192C144.553 27.6107 144.553 29.0293 144.553 30.448C144.553 30.56 144.572 30.672 144.609 30.784C144.647 30.8587 144.759 30.896 144.945 30.896H150.601C150.9 30.896 151.105 30.8587 151.217 30.784C151.367 30.672 151.497 30.5413 151.609 30.392C152.356 28.9733 153.084 27.5547 153.793 26.136C154.503 24.7173 155.212 23.336 155.921 21.992C156.668 20.6107 157.396 19.2293 158.105 17.848C158.815 16.4293 159.543 15.0107 160.289 13.592C160.327 13.5173 160.364 13.4613 160.401 13.424C160.439 13.3493 160.476 13.312 160.513 13.312C160.625 13.312 160.775 13.312 160.961 13.312C161.148 13.312 161.316 13.312 161.465 13.312C161.652 13.312 161.839 13.312 162.025 13.312C162.212 13.312 162.361 13.312 162.473 13.312C162.585 13.312 162.66 13.3493 162.697 13.424C162.735 13.4987 162.716 13.592 162.641 13.704C161.633 15.6453 160.625 17.5867 159.617 19.528C158.647 21.4693 157.657 23.4107 156.649 25.352C155.679 27.2933 154.689 29.2533 153.681 31.232C153.532 31.568 153.439 31.848 153.401 32.072C153.364 32.2587 153.345 32.4453 153.345 32.632C153.42 33.7147 153.663 34.928 154.073 36.272C154.521 37.5787 155.063 38.904 155.697 40.248C156.369 41.5547 157.079 42.7867 157.825 43.944C158.609 45.064 159.393 45.9787 160.177 46.688C160.999 47.36 161.857 47.92 162.753 48.368C163.649 48.7787 164.583 48.984 165.553 48.984C165.628 48.984 165.721 49.0027 165.833 49.04C165.945 49.0773 166.001 49.1333 166.001 49.208V50.72C166.001 50.9067 165.945 51 165.833 51C164.377 51 163.052 50.776 161.857 50.328C160.663 49.8427 159.58 49.1893 158.609 48.368C157.751 47.6587 156.911 46.7253 156.089 45.568C155.268 44.3733 154.503 43.0853 153.793 41.704C153.121 40.3227 152.543 38.96 152.057 37.616C151.609 36.2347 151.311 34.984 151.161 33.864C151.124 33.5653 151.031 33.3973 150.881 33.36C150.769 33.2853 150.657 33.248 150.545 33.248C149.612 33.248 148.679 33.248 147.745 33.248C146.812 33.248 145.879 33.248 144.945 33.248C144.945 33.248 144.871 33.2667 144.721 33.304C144.609 33.3413 144.553 33.4533 144.553 33.64C144.553 35.096 144.553 36.5333 144.553 37.952C144.553 39.3707 144.553 40.7893 144.553 42.208C144.553 43.6267 144.553 45.0453 144.553 46.464C144.553 47.8827 144.553 49.32 144.553 50.776C144.553 50.9253 144.479 51 144.329 51C144.217 51 144.068 51 143.881 51C143.732 51 143.545 51 143.321 51C143.135 51 142.967 51 142.817 51C142.668 51 142.537 51 142.425 51ZM183.791 51.28C180.804 51.28 178.452 50.944 176.735 50.272C175.055 49.5627 173.804 48.6853 172.983 47.64C172.162 46.5573 171.602 45.456 171.303 44.336C171.042 43.216 170.874 42.2453 170.799 41.424C170.65 39.8187 170.538 38.0453 170.463 36.104C170.388 34.1253 170.37 32.128 170.407 30.112C170.444 28.2453 170.5 26.36 170.575 24.456C170.687 22.552 170.818 20.704 170.967 18.912C171.116 17.0827 171.284 15.384 171.471 13.816C171.471 13.7413 171.49 13.648 171.527 13.536C171.602 13.3867 171.658 13.312 171.695 13.312C172.031 13.312 172.33 13.312 172.591 13.312C172.89 13.312 173.207 13.312 173.543 13.312C173.655 13.312 173.73 13.3307 173.767 13.368C173.804 13.4053 173.804 13.4987 173.767 13.648C173.618 15.1413 173.487 16.728 173.375 18.408C173.263 20.088 173.151 21.8613 173.039 23.728C172.89 26.752 172.796 29.8133 172.759 32.912C172.759 35.9733 172.89 38.7733 173.151 41.312C173.226 41.9093 173.338 42.656 173.487 43.552C173.674 44.4107 174.084 45.288 174.719 46.184C175.391 47.0427 176.436 47.7707 177.855 48.368C179.274 48.9653 181.234 49.264 183.735 49.264C186.236 49.264 188.196 48.9653 189.615 48.368C191.071 47.7707 192.116 47.0427 192.751 46.184C193.423 45.288 193.852 44.4107 194.039 43.552C194.263 42.656 194.394 41.9093 194.431 41.312C194.655 38.8107 194.767 36.0853 194.767 33.136C194.804 30.1493 194.748 27.1627 194.599 24.176C194.487 22.272 194.356 20.4427 194.207 18.688C194.095 16.896 193.946 15.216 193.759 13.648C193.759 13.4987 193.778 13.4053 193.815 13.368C193.89 13.3307 193.964 13.312 194.039 13.312C194.375 13.312 194.674 13.312 194.935 13.312C195.234 13.312 195.551 13.312 195.887 13.312C195.962 13.312 196.018 13.3867 196.055 13.536C196.092 13.648 196.111 13.7413 196.111 13.816C196.298 15.384 196.466 17.064 196.615 18.856C196.802 20.6107 196.932 22.4213 197.007 24.288C197.082 26.1547 197.119 28.0213 197.119 29.888C197.194 31.9787 197.194 34.0133 197.119 35.992C197.082 37.9707 196.97 39.7813 196.783 41.424C196.708 42.0587 196.578 42.824 196.391 43.72C196.242 44.5787 195.943 45.456 195.495 46.352C195.047 47.2107 194.356 48.0133 193.423 48.76C192.49 49.5067 191.239 50.1227 189.671 50.608C188.14 51.056 186.18 51.28 183.791 51.28Z" fill="url(#paint0_linear_6_46)"/><path d="M20 28.3333L24 28.3333L20 28.3333ZM32 28.3333L36 28.3333L32 28.3333ZM44 28.3333L48 28.3333L44 28.3333ZM20 47.2222C20 48.2242 20.4214 49.185 21.1716 49.8935C21.9217 50.602 22.9391 51 24 51L30 51C30 49.9981 30.4214 49.0372 31.1716 48.3287C31.9217 47.6202 32.9391 47.2222 34 47.2222C35.0609 47.2222 36.0783 47.6202 36.8284 48.3287C37.5786 49.0372 38 49.9981 38 51L44 51C45.0609 51 46.0783 50.602 46.8284 49.8935C47.5786 49.185 48 48.2242 48 47.2222L48 20.7778C48 19.7758 47.5786 18.815 46.8284 18.1065C46.0783 17.398 45.0609 17 44 17L38 17C38 18.0019 37.5786 18.9628 36.8284 19.6713C36.0783 20.3798 35.0609 20.7778 34 20.7778C32.9391 20.7778 31.9217 20.3798 31.1716 19.6713C30.4214 18.9628 30 18.0019 30 17L24 17C22.9391 17 21.9217 17.398 21.1716 18.1065C20.4214 18.815 20 19.7758 20 20.7778L20 47.2222Z" stroke="url(#paint1_linear_6_46)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_6_46" x1="101" y1="0" x2="101" y2="63" gradientUnits="userSpaceOnUse"><stop stop-color="#F43F5E"/><stop offset="1" stop-color="#D62946"/></linearGradient><linearGradient id="paint1_linear_6_46" x1="34" y1="17" x2="34" y2="51" gradientUnits="userSpaceOnUse"><stop stop-color="#F43F5E"/><stop offset="1" stop-color="#D62946"/></linearGradient></defs></svg>'
    }} />
  )
}

export default Splash
