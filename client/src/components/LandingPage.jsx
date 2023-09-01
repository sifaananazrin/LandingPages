import React from "react";
import Footer from "./Footer";


const Dashboard = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide w-[1500px] h-[1140px]  bg-white">
      <div className="w-[1544px] left-[188px] top-[32px] absolute justify-start items-start gap-20 inline-flex">
        <div className="grow shrink basis-0 h-20 justify-start items-center gap-20 flex">
          <div className="p-5 bg-violet-50 rounded-[99px] justify-center items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                id="a"
                d="M14.1644 0C14.6947 0 15.1332 0.183785 15.4799 0.551353C15.8266 0.918919 16 1.39459 16 1.97838V15.6973C16 16.2595 15.8266 16.7351 15.4799 17.1243C15.1332 17.4919 14.6947 17.6757 14.1644 17.6757C13.6342 17.6757 13.1957 17.4919 12.8489 17.1243C12.5226 16.7568 12.3493 16.2919 12.3289 15.7297C11.819 16.3568 11.1256 16.8973 10.2486 17.3514C9.39197 17.7838 8.48439 18 7.52581 18C6.11855 18 4.84385 17.6216 3.70172 16.8649C2.55959 16.0865 1.65201 15.0162 0.978968 13.6541C0.326323 12.2919 0 10.7459 0 9.01622C0 7.28649 0.326323 5.74054 0.978968 4.37838C1.63161 2.99459 2.5188 1.92432 3.64054 1.16757C4.78266 0.38919 6.03697 0 7.40344 0C8.38241 0 9.30019 0.194595 10.1568 0.583784C11.0134 0.951351 11.7374 1.42703 12.3289 2.01081V1.97838C12.3289 1.41621 12.5022 0.951351 12.8489 0.583784C13.1957 0.194595 13.6342 0 14.1644 0ZM7.9847 14.4324C9.31039 14.4324 10.3913 13.9243 11.2275 12.9081C12.0637 11.8703 12.4818 10.573 12.4818 9.01622C12.4818 7.45946 12.0637 6.16216 11.2275 5.12432C10.3913 4.08649 9.31039 3.56757 7.9847 3.56757C6.67941 3.56757 5.60867 4.08649 4.77247 5.12432C3.93626 6.16216 3.51816 7.45946 3.51816 9.01622C3.51816 10.573 3.92607 11.8703 4.74187 12.9081C5.57808 13.9243 6.65902 14.4324 7.9847 14.4324Z"
                fill="#5243C2"
              />
            </svg>
          </div>
          <div className="grow shrink basis-0 h-12 justify-start items-start gap-[59px] flex">
            <div className="flex-col justify-start items-center gap-3 inline-flex">
              <div className="pt-3.5 justify-start items-start gap-1 inline-flex">
                <div className="text-gray-800 text-base font-normal leading-tight">
                  Discover
                </div>
              </div>
              <div className="w-[27px] h-0.5 relative rounded-[99px]" />
            </div>
            <div className="flex-col justify-start items-center gap-3 inline-flex">
              <div className="pt-3.5 justify-start items-start gap-1 inline-flex">
                <div className="text-gray-800 text-base font-semibold leading-tight">
                  Make Your Burger
                </div>
              </div>
              <div className="w-[140px] h-0.5 relative bg-indigo-700 rounded-[99px]" />
            </div>
          </div>
        </div>
        <div className="py-[11px] justify-start items-center gap-[60px] flex">
          <div className="bg-rose-50 rounded-[99px] justify-center items-center flex">
            <div className="px-3 py-1.5 justify-center items-center gap-1 flex">
              <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-4 h-4 relative"></div>
              </div>
              <div className="text-red-500 text-base font-semibold leading-tight">
                Call Me Back
              </div>
            </div>
          </div>
          <div className="text-gray-800 text-base font-semibold leading-tight">
            8 800 437-87-22
          </div>
          <div className="w-[58px] h-[58px] justify-center items-center flex">
            <div className="p-3.5 bg-violet-50 rounded-[99px] flex-col justify-start items-start inline-flex">
              <div className="w-[30px] h-[30px] pl-0.5 pr-[3px] py-0.5 justify-center items-center inline-flex">
                <div className="w-[25px] h-[26px] relative">
                  <img
                    className="w-6 h-6 left-0 top-0 absolute"
                    src="https://s3-alpha-sig.figma.com/img/2d49/e706/59574e9e376940d47ef68df808b95016?Expires=1694390400&Signature=dv-PuI3RpE6UeHe59xTA-bdmtM86zXkun~PsmONb3sz9~E8LsOEEZ7cXstbKh5NJtkku-nteijlg7O8fUPMWTcW8~C~L8n3MFzuPLEaxqIVgszdF0buFxtoATxdPopvTQvzzoI9XvNHAdZT0t0XT6XmA5Mk1aFDTpC0EhztTTKKBVWpE122aCmBAcdYmdB2kYezdzIWbnU14WeME21xHJPSTO0h04g0WimL8BgJcxy692VKFTtAiw~U7CUROqa32j1MRosZDjxySFhUmdg7BrOzfYOTpuRF-ax0HjaESwh8sYB7kqtT93vdLvzSyx4aZXMbeECSt4HhyML6WZ625UQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  />
                  <div className="w-2.5 h-2.5 left-[15px] top-[16px] absolute rounded-[999px] border border-slate-100">
                    <div className="w-2.5 h-[5px] left-0 top-0 absolute bg-blue-600" />
                    <div className="w-2.5 h-[5px] left-0 top-[5px] absolute bg-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-14 pb-8 justify-between top-[1084px] absolute flex-col w-full items-center gap-4 inline-flex">
        <Footer/>
      </div>
      <div className="h-[239px] left-[1279px] top-[347px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch h-[239px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-[239px] flex-col justify-start items-start gap-6 flex">
            <div className="text-gray-800 text-4xl font-semibold">Summary</div>
            <div className="w-[405px] h-0.5 relative bg-violet-50 rounded-[99px]" />
            <div className="self-stretch h-[52px] rounded-[99px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 text-indigo-700 text-4xl font-extrabold">
                  $12.31
                </div>
                <div className="h-[52px] bg-indigo-700 rounded-[99px] justify-center items-center flex">
                  <div className="p-4 justify-center items-center gap-1 flex">
                    <div className="text-violet-50 text-base font-semibold leading-tight">
                      Checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch p-4 bg-violet-50 rounded-[32px] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 h-8 rounded-[50px] justify-start items-center gap-2 flex">
                <div className="w-8 h-8 p-2 bg-purple-500 rounded-[99px] justify-center items-center flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g id="clock 1" clip-path="url(#clip0_1329_357)">
                      <path
                        id="Vector"
                        d="M8 0C3.58862 0 0 3.58862 0 8C0 12.4114 3.58862 16 8 16C12.4114 16 16 12.4114 16 8C16 3.58862 12.4114 0 8 0ZM11.8047 12.1379C11.6747 12.2679 11.504 12.3334 11.3334 12.3334C11.1627 12.3334 10.9919 12.2679 10.8621 12.1379L7.52869 8.80469C7.40332 8.68005 7.33337 8.51062 7.33337 8.33337V4C7.33337 3.63135 7.63196 3.33337 8 3.33337C8.36804 3.33337 8.66663 3.63135 8.66663 4V8.05737L11.8047 11.1953C12.0653 11.4561 12.0653 11.8773 11.8047 12.1379Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1329_357">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="text-gray-800 text-sm font-semibold leading-tight">
                    7 min
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-8 rounded-[50px] justify-start items-center gap-2 flex">
                <div className="w-8 h-8 p-2 bg-orange-400 rounded-[99px] justify-center items-center flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1329_363)">
                      <path
                        d="M15.7748 1.52534C15.3655 1.04789 14.8198 0.775033 14.2059 0.843263H2.40584C1.17808 0.843263 0.154951 2.00282 0.359578 3.23058L1.99659 13.4619C2.13302 14.485 3.01972 15.1671 4.04285 15.1671H12.6372C13.6603 15.1671 14.547 14.4168 14.6834 13.4619L16.3204 3.23058C16.3886 2.6167 16.184 2.00282 15.7748 1.52534ZM9.77239 9.7104C9.56777 9.50577 9.36314 9.36934 9.09032 9.30115L9.636 6.5728L8.27181 6.29998L7.65793 9.23295C7.38511 9.30114 7.11225 9.50577 6.83943 9.7104L3.42897 6.36818C6.08912 3.70803 10.3863 3.70803 13.0464 6.36818L9.77239 9.7104Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1329_363">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.333374)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="text-gray-800 text-sm font-semibold leading-tight">
                    20 oz
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-8 rounded-[50px] justify-start items-center gap-2 flex">
                <div className="w-8 h-8 p-[5px] bg-red-500 rounded-[99px] justify-center items-center flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                  >
                    <path
                      d="M13.4167 1C9.43867 3.4558 9.91673 10.375 9.91673 10.375C9.91673 10.375 8.16675 9.74998 8.16675 6.93751C6.07889 8.23465 4.66675 10.7278 4.66675 13.5C4.66675 17.6421 7.80075 21 11.6667 21C15.5327 21 18.6667 17.6421 18.6667 13.5C18.6667 7.40626 13.4167 6.15624 13.4167 1ZM12.2816 18.4157C10.875 18.7915 9.45033 17.8744 9.09955 16.3672C8.74885 14.8601 9.60483 13.3336 11.0115 12.9578C14.4076 12.0506 14.8332 10.0045 14.8332 10.0045C14.8332 10.0045 16.5267 17.2817 12.2816 18.4157Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="text-gray-800 text-sm font-semibold leading-tight">
                    429 kcal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[602.35px] h-[595px] left-[640px] top-[164px] absolute">
        <div className="w-[533px] h-[450px] left-[23px] top-[119px] absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="598"
            height="505"
            viewBox="0 0 598 595"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M284.577 4.0822C345.611 6.85716 410.53 6.69025 458.855 44.0608C506.558 80.9514 517.101 145.051 539.335 201.093C563.417 261.796 612.581 321.722 593.829 384.276C575.033 446.975 501.797 471.417 447.384 507.827C395.44 542.585 346.569 583.206 284.577 591.21C216.807 599.96 142.225 595.85 88.0471 554.224C34.3705 512.982 15.2397 441.79 3.38747 375.161C-7.20295 315.626 9.00217 257.842 24.9489 199.512C41.7873 137.92 47.3604 66.0811 98.3869 27.6721C149.615 -10.8891 220.514 1.16958 284.577 4.0822Z"
              fill="#F5F5FF"
            />
          </svg>
          <div className="w-[533px] h-[157px] left-0 top-[329px] absolute">
            <img
              className="w-[441.29px] h-[155.95px] left-[46.39px] top-[0.75px] absolute"
              src="https://s3-alpha-sig.figma.com/img/429a/c92c/7a0e246a51e5ab6bf1848f5a9f54e16b?Expires=1694390400&Signature=B1VmsUe8FFS0R84ANKMC7AUxedZeBWb1ar8wmEM~8e1RVPmYgWRP3sx2lQoZGICub6XFu1Kako2Kk-YgqxHZtzwpO2nJHb9or2e2FjAox-j3YLWGrMb8Fe5QZr79ttYSOvSlt9ItCvGbmrGNxDY6LIdVYLgsmi5MX3xk5c~8u2EOn9~sGkZ4gxU~7YodfTkow3PUt8~HOKpCPg5TLr0~lK2z0HF83GNOKiAvjyr9UNOFXXCq8gPl4~9V26GX8tpDrXM7rrmrv6kUnaoeLUQBBgNiRzsMbRTA-QFNMY2XLDIUwxkV0lfCl5liPVNiyNdBQp7LTbfA4uQ2F3IPwAXwpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
          </div>
          <div className="w-[454px] h-[480px] left-[40px] top-0 absolute">
            <div className="w-[454px] h-[210px] py-[59.06px] left-0 top-[270px] absolute justify-center items-center inline-flex">
              <img
                className="w-[454px] h-[91.88px]"
                src="https://s3-alpha-sig.figma.com/img/64d7/5372/cf6be8b69caf3ebfef926fa51d85db9a?Expires=1694390400&Signature=Ah0L3n1CuciACdr3GZlesmP-mP5ztmuVUIBIl1nwJdL9yjVvV9xjcieELvj5ZyuW1HsPUAWSlbkt7DFoKRpgueCtw~F5n~Bnfj0FW2oEioneGYBQ5jbxRfxxMvwIBJlU1Mad8tc4kw5IHBHvhixTDGuGPfG9Q8OtI0eXAB0N4SU3pJV414YpqtOZ~gB4AQe~sdVFTIq-Og0ltoQs2YQnbDPcSJeKDmlE24WjhLGOZVnLo0oqXf1A9HDmFO48oxjI41UqbX17dln9lJTaiqRcp8cdWOdVxwLY9Hl9wsLQVzO2G~KjS3P2o9mf2u4LEei0i-g~hBiah4Wlf9VQH5MHVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[446px] h-48 pt-[37.50px] pb-[39px] left-[1px] top-[252px] absolute justify-center items-center inline-flex">
              <img
                className="w-[446px] h-[115.50px]"
                src="https://s3-alpha-sig.figma.com/img/004e/2683/3fb3ff55365c76db31d70a4feb72c36f?Expires=1694390400&Signature=oJqapkPrcS0b8lTBQnvQGWWYFe3SNBj1~n8atjAM1wpgKClUt6dQDZHMyiR8u-6irW7siwPV6lH8iAiBcjMerFWnZ4Djok~9a2yKhv~DbI4pB3eAvEZFOJqvMVPTNdTJddjpSGbETxWc-I7v1N3e17RRhpmme7loUIY7GDMY~MzDt7rOVGtwcneTeV9iyBCXOtRQYjxKgf8YOoMLLY1nUDUA1YtboGqNTBS2C0PizbYr0AXiWL~9LBGvD8H-OH0tWeI9HWh65fI8m11aUaJxq19Fs0ffQAgJDs6nyHMqGmQNr9hIn0PC2XVdXKYdYFXhGNKJ5jiQiedk1~w7XQqIQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[420px] h-[196px] pt-[56.66px] pb-[58.19px] left-[14px] top-[259px] absolute justify-center items-center inline-flex">
              <img
                className="w-[420px] h-[81.16px]"
                src="https://s3-alpha-sig.figma.com/img/086b/e6bf/3b4e587e128eb5982f3817bff051f9c7?Expires=1694390400&Signature=X1DEvaVerQqIUMgqRTRMU64AM6ytaStmp2R0gx16ec1gE2OCMbhMw6kTgX3x7-HMuMYicShPzGrVoO5TLZt8GXh6VOPDsixYqpXDq70KOi3XYqcD0H7VQJH~AZZHhYRzJHg0tt~y88kUo-a5YDdijlvWT4By7R8bCwFNaBtZ5HEnO4kYN1QCz4VSJ9-ChZ-ZcCok73M~TDe4bH3XvQ-BfPCJTIgIhsW5T6O0vGNc2DWfQLxsYqt8aSw4ArivMREKJpm4NWK9Q-hLSds-2RhaIYQgG8ElNac~EQJM7cykurHh2ygXvnZUb0uh33ujsgiq9GLp3-dWznTImx7~UIeMJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[168px] h-[82px] left-[6px] top-[293px] absolute justify-center items-center inline-flex">
              <img
                className="w-[164.24px] h-[71.13px] origin-top-left rotate-[-10.69deg]"
                src="https://s3-alpha-sig.figma.com/img/d2dd/a4c7/8a3c9739433f2bfaeaf1bf372bd328bb?Expires=1694390400&Signature=ijxpbvH5GvarSsRWNN4HL19iPtloXTrFQuh8gx7Erb-BppBz6y4TpMtDHaW9s2nV9~yn6PbwX1Q6BwaqXuKrjo3PJPFTwm1z3FAdE6hnpL0a6vkeMXTn7-Tb32mc6Ig2VksY5aD3yGvktxL22r0amP56f8AirieeVqzBfOn0H4DWYfVpJRZA-zbQaLVmZdXCpRmG08xVsKCA6IBBSo5Tk5ZGhFSiads8LYQQ2Kmac89wuXwa2gd0EIqZGaL8OrlmFt-u-5o-bistHSetsBXqHuluKUFSACk8fAcs92vNdXQGDwiUlbiuhSve8V86K7dHFrgUfjP84Rf5d~GwY7-4vg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[168px] h-[82px] left-[152px] top-[293px] absolute justify-center items-center inline-flex">
              <img
                className="w-[164.24px] h-[71.13px] origin-top-left rotate-[-10.69deg]"
                src="https://s3-alpha-sig.figma.com/img/d2dd/a4c7/8a3c9739433f2bfaeaf1bf372bd328bb?Expires=1694390400&Signature=ijxpbvH5GvarSsRWNN4HL19iPtloXTrFQuh8gx7Erb-BppBz6y4TpMtDHaW9s2nV9~yn6PbwX1Q6BwaqXuKrjo3PJPFTwm1z3FAdE6hnpL0a6vkeMXTn7-Tb32mc6Ig2VksY5aD3yGvktxL22r0amP56f8AirieeVqzBfOn0H4DWYfVpJRZA-zbQaLVmZdXCpRmG08xVsKCA6IBBSo5Tk5ZGhFSiads8LYQQ2Kmac89wuXwa2gd0EIqZGaL8OrlmFt-u-5o-bistHSetsBXqHuluKUFSACk8fAcs92vNdXQGDwiUlbiuhSve8V86K7dHFrgUfjP84Rf5d~GwY7-4vg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[168px] h-[82px] left-[266px] top-[293px] absolute justify-center items-center inline-flex">
              <img
                className="w-[164.24px] h-[71.13px] origin-top-left rotate-[-10.69deg]"
                src="https://s3-alpha-sig.figma.com/img/d2dd/a4c7/8a3c9739433f2bfaeaf1bf372bd328bb?Expires=1694390400&Signature=ijxpbvH5GvarSsRWNN4HL19iPtloXTrFQuh8gx7Erb-BppBz6y4TpMtDHaW9s2nV9~yn6PbwX1Q6BwaqXuKrjo3PJPFTwm1z3FAdE6hnpL0a6vkeMXTn7-Tb32mc6Ig2VksY5aD3yGvktxL22r0amP56f8AirieeVqzBfOn0H4DWYfVpJRZA-zbQaLVmZdXCpRmG08xVsKCA6IBBSo5Tk5ZGhFSiads8LYQQ2Kmac89wuXwa2gd0EIqZGaL8OrlmFt-u-5o-bistHSetsBXqHuluKUFSACk8fAcs92vNdXQGDwiUlbiuhSve8V86K7dHFrgUfjP84Rf5d~GwY7-4vg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[136px] h-[74px] left-[14px] top-[279px] absolute justify-center items-center inline-flex">
              <img
                className="w-[124.81px] h-[89.53px] origin-top-left rotate-[-19.53deg]"
                src="https://s3-alpha-sig.figma.com/img/c46f/4074/6bea6a4e6a415937f27c31006ad5a66c?Expires=1694390400&Signature=heLb7YTaUg~QUZ9XtlzCdBTm0LZ2I9pFTssyifqH8-VyHq8WU6kSYAngC76B7YrZKFDmpUBswOTMC0U0JYd7vBMvaJQdE1XcsiUiUnL4Ot4hk5yByP0MMET5rq0TcJ8M9eLnElKqOAztrL4fxKNqfjp0N780yPINpTN0VmdLFSXt9i~1-82VMTAYCxAEV1~ldPZveF-B66Q969SpP7YpTMFOw6SahNOiRBFDfwVqzTnm-xHQUxUmwcYet3vhLARlsH-GzA3Qsj1fRwoNAwm-QTXSJMprFHEpUXmVnVi1JtlhYBXXkJVlsnj9Ucc~pP6s29YLt7kcR3u2CQEBAjvjvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[136px] h-[74px] left-[150px] top-[285px] absolute justify-center items-center inline-flex">
              <img
                className="w-[124.81px] h-[89.53px] origin-top-left rotate-[-19.53deg]"
                src="https://s3-alpha-sig.figma.com/img/c46f/4074/6bea6a4e6a415937f27c31006ad5a66c?Expires=1694390400&Signature=heLb7YTaUg~QUZ9XtlzCdBTm0LZ2I9pFTssyifqH8-VyHq8WU6kSYAngC76B7YrZKFDmpUBswOTMC0U0JYd7vBMvaJQdE1XcsiUiUnL4Ot4hk5yByP0MMET5rq0TcJ8M9eLnElKqOAztrL4fxKNqfjp0N780yPINpTN0VmdLFSXt9i~1-82VMTAYCxAEV1~ldPZveF-B66Q969SpP7YpTMFOw6SahNOiRBFDfwVqzTnm-xHQUxUmwcYet3vhLARlsH-GzA3Qsj1fRwoNAwm-QTXSJMprFHEpUXmVnVi1JtlhYBXXkJVlsnj9Ucc~pP6s29YLt7kcR3u2CQEBAjvjvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[136px] h-[74px] left-[284px] top-[285px] absolute justify-center items-center inline-flex">
              <img
                className="w-[124.81px] h-[89.53px] origin-top-left rotate-[-19.53deg]"
                src="https://s3-alpha-sig.figma.com/img/c46f/4074/6bea6a4e6a415937f27c31006ad5a66c?Expires=1694390400&Signature=heLb7YTaUg~QUZ9XtlzCdBTm0LZ2I9pFTssyifqH8-VyHq8WU6kSYAngC76B7YrZKFDmpUBswOTMC0U0JYd7vBMvaJQdE1XcsiUiUnL4Ot4hk5yByP0MMET5rq0TcJ8M9eLnElKqOAztrL4fxKNqfjp0N780yPINpTN0VmdLFSXt9i~1-82VMTAYCxAEV1~ldPZveF-B66Q969SpP7YpTMFOw6SahNOiRBFDfwVqzTnm-xHQUxUmwcYet3vhLARlsH-GzA3Qsj1fRwoNAwm-QTXSJMprFHEpUXmVnVi1JtlhYBXXkJVlsnj9Ucc~pP6s29YLt7kcR3u2CQEBAjvjvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[434px] h-[206px] py-[28.97px] left-[13px] top-[177px] absolute justify-center items-center inline-flex">
              <img
                className="w-[434px] h-[148.06px]"
                src="https://s3-alpha-sig.figma.com/img/fcad/9f5b/7a1e76b4ee03d4e9a10b14ab1191ddd2?Expires=1694390400&Signature=cQIT4seNAOlCU7kcCrllR0o~15cSdPem9A4yRD8zh1pubr3D7bz8Xt5HI3~ClGZmXF-Tt1VOj59sYm0o0eiVoQla0fpuHTRg69sAUkUVNa6z2t9DoG3ZI-JT6oCifx~R4m35gF-Z6a57dDidSnBMzZAHx23tkF4qlF~eqfgANWs5aQvGpInEeQY7lgPvWLT~drxoLKyPGdh2the31~R31gRg8z577KbHsv5QasvTtxIAgiTBhr-HzXzf-nv-DUKcLPAECzVAOF0SIjW6UPAVp8zitDKyBbyhIFe9InDdYft3M4a9sx3IG9O1kfdXWRbUWaLMt3XdKsq6dLEAwuGMdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[270px] h-32 left-[15px] top-[208px] absolute justify-center items-center inline-flex">
              <img
                className="w-[257.44px] h-[92.59px] origin-top-left rotate-[-12.51deg]"
                src="https://s3-alpha-sig.figma.com/img/0be7/7414/bc1ebf35314251c96549e8749b3b93d4?Expires=1694390400&Signature=L7CVjARLGo3S48L2w8aLZ4TGTn0DhlCdoG5RuQXFUlmeDMgg-vYs4e2Xdd7FJvYW0Vp~mhltmcd9UF5CflNsdn-ZNEgfMcCWCycjsEnyI37RcabzMBJH4MXK0fW3Lqiu3jwIR9T2t2I0YPuts7IdGTlPhfmwpyeUATNxswSncoRbNdxo6S2JSQyCWChGZsmZ~dfW4aSInQKn1sEOaPD2cIRsaRswtbHNn4jhgwkp8eaitQDrkUBPphRS-Z13LYC3GPdnnz9y1nzQmwCX2Tl7X871YOH31HaC-ApdKxWdAoYgvfsKaX-3MhdtL05RBv7Fa-fB2THrBlg0nGBEIU-F1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[270px] h-32 left-[178px] top-[198px] absolute justify-center items-center inline-flex">
              <img
                className="w-[257.44px] h-[92.59px] origin-top-left rotate-[-12.51deg]"
                src="https://s3-alpha-sig.figma.com/img/0be7/7414/bc1ebf35314251c96549e8749b3b93d4?Expires=1694390400&Signature=L7CVjARLGo3S48L2w8aLZ4TGTn0DhlCdoG5RuQXFUlmeDMgg-vYs4e2Xdd7FJvYW0Vp~mhltmcd9UF5CflNsdn-ZNEgfMcCWCycjsEnyI37RcabzMBJH4MXK0fW3Lqiu3jwIR9T2t2I0YPuts7IdGTlPhfmwpyeUATNxswSncoRbNdxo6S2JSQyCWChGZsmZ~dfW4aSInQKn1sEOaPD2cIRsaRswtbHNn4jhgwkp8eaitQDrkUBPphRS-Z13LYC3GPdnnz9y1nzQmwCX2Tl7X871YOH31HaC-ApdKxWdAoYgvfsKaX-3MhdtL05RBv7Fa-fB2THrBlg0nGBEIU-F1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[148px] h-20 left-[15px] top-[205px] absolute justify-center items-center inline-flex">
              <img
                className="w-[135.72px] h-[96.86px] origin-top-left rotate-[-19.41deg]"
                src="https://s3-alpha-sig.figma.com/img/c46f/4074/6bea6a4e6a415937f27c31006ad5a66c?Expires=1694390400&Signature=heLb7YTaUg~QUZ9XtlzCdBTm0LZ2I9pFTssyifqH8-VyHq8WU6kSYAngC76B7YrZKFDmpUBswOTMC0U0JYd7vBMvaJQdE1XcsiUiUnL4Ot4hk5yByP0MMET5rq0TcJ8M9eLnElKqOAztrL4fxKNqfjp0N780yPINpTN0VmdLFSXt9i~1-82VMTAYCxAEV1~ldPZveF-B66Q969SpP7YpTMFOw6SahNOiRBFDfwVqzTnm-xHQUxUmwcYet3vhLARlsH-GzA3Qsj1fRwoNAwm-QTXSJMprFHEpUXmVnVi1JtlhYBXXkJVlsnj9Ucc~pP6s29YLt7kcR3u2CQEBAjvjvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[148px] h-20 left-[150px] top-[205px] absolute justify-center items-center inline-flex">
              <img
                className="w-[135.72px] h-[96.86px] origin-top-left rotate-[-19.41deg]"
                src="https://s3-alpha-sig.figma.com/img/c46f/4074/6bea6a4e6a415937f27c31006ad5a66c?Expires=1694390400&Signature=heLb7YTaUg~QUZ9XtlzCdBTm0LZ2I9pFTssyifqH8-VyHq8WU6kSYAngC76B7YrZKFDmpUBswOTMC0U0JYd7vBMvaJQdE1XcsiUiUnL4Ot4hk5yByP0MMET5rq0TcJ8M9eLnElKqOAztrL4fxKNqfjp0N780yPINpTN0VmdLFSXt9i~1-82VMTAYCxAEV1~ldPZveF-B66Q969SpP7YpTMFOw6SahNOiRBFDfwVqzTnm-xHQUxUmwcYet3vhLARlsH-GzA3Qsj1fRwoNAwm-QTXSJMprFHEpUXmVnVi1JtlhYBXXkJVlsnj9Ucc~pP6s29YLt7kcR3u2CQEBAjvjvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[148px] h-20 left-[286px] top-[205px] absolute justify-center items-center inline-flex">
              <img
                className="w-[135.72px] h-[96.86px] origin-top-left rotate-[-19.41deg]"
                src="https://s3-alpha-sig.figma.com/img/c46f/4074/6bea6a4e6a415937f27c31006ad5a66c?Expires=1694390400&Signature=heLb7YTaUg~QUZ9XtlzCdBTm0LZ2I9pFTssyifqH8-VyHq8WU6kSYAngC76B7YrZKFDmpUBswOTMC0U0JYd7vBMvaJQdE1XcsiUiUnL4Ot4hk5yByP0MMET5rq0TcJ8M9eLnElKqOAztrL4fxKNqfjp0N780yPINpTN0VmdLFSXt9i~1-82VMTAYCxAEV1~ldPZveF-B66Q969SpP7YpTMFOw6SahNOiRBFDfwVqzTnm-xHQUxUmwcYet3vhLARlsH-GzA3Qsj1fRwoNAwm-QTXSJMprFHEpUXmVnVi1JtlhYBXXkJVlsnj9Ucc~pP6s29YLt7kcR3u2CQEBAjvjvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[454px] h-[210px] py-[59.06px] left-0 top-[144px] absolute justify-center items-center inline-flex">
              <img
                className="w-[454px] h-[91.88px]"
                src="https://s3-alpha-sig.figma.com/img/64d7/5372/cf6be8b69caf3ebfef926fa51d85db9a?Expires=1694390400&Signature=Ah0L3n1CuciACdr3GZlesmP-mP5ztmuVUIBIl1nwJdL9yjVvV9xjcieELvj5ZyuW1HsPUAWSlbkt7DFoKRpgueCtw~F5n~Bnfj0FW2oEioneGYBQ5jbxRfxxMvwIBJlU1Mad8tc4kw5IHBHvhixTDGuGPfG9Q8OtI0eXAB0N4SU3pJV414YpqtOZ~gB4AQe~sdVFTIq-Og0ltoQs2YQnbDPcSJeKDmlE24WjhLGOZVnLo0oqXf1A9HDmFO48oxjI41UqbX17dln9lJTaiqRcp8cdWOdVxwLY9Hl9wsLQVzO2G~KjS3P2o9mf2u4LEei0i-g~hBiah4Wlf9VQH5MHVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[434px] h-[206px] py-[28.97px] left-[13px] top-[87px] absolute justify-center items-center inline-flex">
              <img
                className="w-[434px] h-[148.06px]"
                src="https://s3-alpha-sig.figma.com/img/fcad/9f5b/7a1e76b4ee03d4e9a10b14ab1191ddd2?Expires=1694390400&Signature=cQIT4seNAOlCU7kcCrllR0o~15cSdPem9A4yRD8zh1pubr3D7bz8Xt5HI3~ClGZmXF-Tt1VOj59sYm0o0eiVoQla0fpuHTRg69sAUkUVNa6z2t9DoG3ZI-JT6oCifx~R4m35gF-Z6a57dDidSnBMzZAHx23tkF4qlF~eqfgANWs5aQvGpInEeQY7lgPvWLT~drxoLKyPGdh2the31~R31gRg8z577KbHsv5QasvTtxIAgiTBhr-HzXzf-nv-DUKcLPAECzVAOF0SIjW6UPAVp8zitDKyBbyhIFe9InDdYft3M4a9sx3IG9O1kfdXWRbUWaLMt3XdKsq6dLEAwuGMdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[446px] h-48 pt-[37.50px] pb-[39px] left-[1px] top-[81px] absolute justify-center items-center inline-flex">
              <img
                className="w-[446px] h-[115.50px]"
                src="https://s3-alpha-sig.figma.com/img/004e/2683/3fb3ff55365c76db31d70a4feb72c36f?Expires=1694390400&Signature=oJqapkPrcS0b8lTBQnvQGWWYFe3SNBj1~n8atjAM1wpgKClUt6dQDZHMyiR8u-6irW7siwPV6lH8iAiBcjMerFWnZ4Djok~9a2yKhv~DbI4pB3eAvEZFOJqvMVPTNdTJddjpSGbETxWc-I7v1N3e17RRhpmme7loUIY7GDMY~MzDt7rOVGtwcneTeV9iyBCXOtRQYjxKgf8YOoMLLY1nUDUA1YtboGqNTBS2C0PizbYr0AXiWL~9LBGvD8H-OH0tWeI9HWh65fI8m11aUaJxq19Fs0ffQAgJDs6nyHMqGmQNr9hIn0PC2XVdXKYdYFXhGNKJ5jiQiedk1~w7XQqIQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[420px] h-[196px] pt-[56.66px] pb-[58.19px] left-[14px] top-[88px] absolute justify-center items-center inline-flex">
              <img
                className="w-[350px] h-[81.16px]"
                src="https://s3-alpha-sig.figma.com/img/086b/e6bf/3b4e587e128eb5982f3817bff051f9c7?Expires=1694390400&Signature=X1DEvaVerQqIUMgqRTRMU64AM6ytaStmp2R0gx16ec1gE2OCMbhMw6kTgX3x7-HMuMYicShPzGrVoO5TLZt8GXh6VOPDsixYqpXDq70KOi3XYqcD0H7VQJH~AZZHhYRzJHg0tt~y88kUo-a5YDdijlvWT4By7R8bCwFNaBtZ5HEnO4kYN1QCz4VSJ9-ChZ-ZcCok73M~TDe4bH3XvQ-BfPCJTIgIhsW5T6O0vGNc2DWfQLxsYqt8aSw4ArivMREKJpm4NWK9Q-hLSds-2RhaIYQgG8ElNac~EQJM7cykurHh2ygXvnZUb0uh33ujsgiq9GLp3-dWznTImx7~UIeMJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-[427px] h-[190px] left-[15px] top-0 absolute justify-center items-center inline-flex">
              <img
                className="w-[427px] h-[190px]"
                src="https://s3-alpha-sig.figma.com/img/05bb/cf59/2483ed9ed54d48f44abcc7fc217e1821?Expires=1694390400&Signature=K3~IVqi1gztL8rJ9RMocVHzvupuQi7ZquQogjlPLqV~wZa~gEZNQ05aFKwiGnIzzXpep0sai8thLsKedGMdI2JK6JeRKISIWc-Iyb5d7fTZbCWvNXnxwavhJx12LYH9FgdCEC-FR-0tHa82URWx7redC3SE0pr4Aylz3-ctst4INJ6EyaNguVIu9RLLqFk9IRZrIocIlcBqcjlAHnwixHn7M2MF-aNdMBeMF4Q2wfmHLR4vVEleHg44Zn3u4R-YtyBjaVPD2T-iW~3GQEs3krzWnNUZ5E0wppkVIDpYfYLQjpZRzYY70LjBgF4nnYBgvHmKdNBuJR0dsk~M0H0VEyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
          </div>
        </div>
        <div className="w-[172px] h-[134px] left-[458px] top-[481px] absolute justify-center items-center inline-flex">
          <img
            className="w-[172px] h-[134px]"
            src="https://s3-alpha-sig.figma.com/img/ae0b/0341/532a91f8936ae48acf6a9f85825d1cf3?Expires=1694390400&Signature=cU4Im1Yacc-FRhdmsCQSE8CdLsYLHeJ2Z77-tFMPhEhmK61AmN9~NK9WZuGmWyPoN8kxAEyI1DOBmUwr0hYCZG9hwWDihvCMfhDjr~~qlkVSS8Vvr3drlCHCqawBsmXsgic~SawqM-JXAbSDWqWW~MRPSpooj7RGKOxoRez4LWZQb8o39s0GooXTDRF81EAA1EGvnIYyghTN1tMBKCnS4EVuOzNdTG1wnNNAXl2~TCztMBBHo8NgoDyaVktNP0PAOWR64eBWF8C9Xd0zZaNTdxr509loE~c-50HsVdl0O5jwhuncAxSWshTqtHYks8Ve9fG0qcw5Xl~QCQzddXxjkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </div>
      </div>
      <div className="left-[280px] top-[840px] absolute justify-start items-center gap-8 inline-flex">
        <div className="h-[183px] px-[18px] py-6 bg-white rounded-[32px] border border-slate-100 justify-start items-start gap-2.5 flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-3 inline-flex">
            <div className="w-[104px] h-[59px] py-[5px] justify-center items-center inline-flex">
              <div className="w-[104px] h-[49px] py-[6.89px] justify-center items-center inline-flex">
                <img
                  className="w-[104px] h-[35.22px]"
                  src="https://s3-alpha-sig.figma.com/img/fcad/9f5b/7a1e76b4ee03d4e9a10b14ab1191ddd2?Expires=1694390400&Signature=cQIT4seNAOlCU7kcCrllR0o~15cSdPem9A4yRD8zh1pubr3D7bz8Xt5HI3~ClGZmXF-Tt1VOj59sYm0o0eiVoQla0fpuHTRg69sAUkUVNa6z2t9DoG3ZI-JT6oCifx~R4m35gF-Z6a57dDidSnBMzZAHx23tkF4qlF~eqfgANWs5aQvGpInEeQY7lgPvWLT~drxoLKyPGdh2the31~R31gRg8z577KbHsv5QasvTtxIAgiTBhr-HzXzf-nv-DUKcLPAECzVAOF0SIjW6UPAVp8zitDKyBbyhIFe9InDdYft3M4a9sx3IG9O1kfdXWRbUWaLMt3XdKsq6dLEAwuGMdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <div className="text-center text-gray-800 text-sm font-semibold leading-tight">
                Cutlet
              </div>
            </div>
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  +
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-8 p-2 bg-white rounded-[99px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-gray-800 text-xl font-semibold leading-loose">
                  2
                </div>
              </div>
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  -
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[183px] px-[18px] py-6 bg-white rounded-[32px] border border-slate-100 justify-start items-start gap-2.5 flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-3 inline-flex">
            <div className="w-[104px] h-[59px] py-[5px] justify-center items-center inline-flex">
              <div className="w-[104px] h-[49px] py-[13.78px] justify-center items-center inline-flex">
                <img
                  className="w-[104px] h-[21.44px]"
                  src="https://s3-alpha-sig.figma.com/img/64d7/5372/cf6be8b69caf3ebfef926fa51d85db9a?Expires=1694390400&Signature=Ah0L3n1CuciACdr3GZlesmP-mP5ztmuVUIBIl1nwJdL9yjVvV9xjcieELvj5ZyuW1HsPUAWSlbkt7DFoKRpgueCtw~F5n~Bnfj0FW2oEioneGYBQ5jbxRfxxMvwIBJlU1Mad8tc4kw5IHBHvhixTDGuGPfG9Q8OtI0eXAB0N4SU3pJV414YpqtOZ~gB4AQe~sdVFTIq-Og0ltoQs2YQnbDPcSJeKDmlE24WjhLGOZVnLo0oqXf1A9HDmFO48oxjI41UqbX17dln9lJTaiqRcp8cdWOdVxwLY9Hl9wsLQVzO2G~KjS3P2o9mf2u4LEei0i-g~hBiah4Wlf9VQH5MHVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <div className="text-center text-gray-800 text-sm font-semibold leading-tight">
                Mayo
              </div>
            </div>
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  +
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-8 p-2 bg-white rounded-[99px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-gray-800 text-xl font-semibold leading-loose">
                  2
                </div>
              </div>
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  -
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[183px] px-[18px] py-6 bg-white rounded-[32px] border border-slate-100 justify-start items-start gap-2.5 flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-3 inline-flex">
            <div className="w-[104px] h-[59px] py-[5px] justify-center items-center inline-flex">
              <div className="w-[104px] h-[49px] justify-center items-center inline-flex">
                <img
                  className="w-[101.55px] h-[42.56px] origin-top-left rotate-[-10.33deg]"
                  src="https://s3-alpha-sig.figma.com/img/d2dd/a4c7/8a3c9739433f2bfaeaf1bf372bd328bb?Expires=1694390400&Signature=ijxpbvH5GvarSsRWNN4HL19iPtloXTrFQuh8gx7Erb-BppBz6y4TpMtDHaW9s2nV9~yn6PbwX1Q6BwaqXuKrjo3PJPFTwm1z3FAdE6hnpL0a6vkeMXTn7-Tb32mc6Ig2VksY5aD3yGvktxL22r0amP56f8AirieeVqzBfOn0H4DWYfVpJRZA-zbQaLVmZdXCpRmG08xVsKCA6IBBSo5Tk5ZGhFSiads8LYQQ2Kmac89wuXwa2gd0EIqZGaL8OrlmFt-u-5o-bistHSetsBXqHuluKUFSACk8fAcs92vNdXQGDwiUlbiuhSve8V86K7dHFrgUfjP84Rf5d~GwY7-4vg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <div className="text-center text-gray-800 text-sm font-semibold leading-tight">
                Onion
              </div>
            </div>
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  +
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-8 p-2 bg-white rounded-[99px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-gray-800 text-xl font-semibold leading-loose">
                  5
                </div>
              </div>
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  -
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[183px] px-[18px] py-6 bg-white rounded-[32px] border border-slate-100 justify-start items-start gap-2.5 flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-3 inline-flex">
            <div className="w-[104px] h-[59px] py-[5px] justify-center items-center inline-flex">
              <div className="w-[104px] h-[49px] justify-center items-center inline-flex">
                <img
                  className="w-[99.13px] h-[35.46px] origin-top-left rotate-[-12.43deg]"
                  src="https://s3-alpha-sig.figma.com/img/0be7/7414/bc1ebf35314251c96549e8749b3b93d4?Expires=1694390400&Signature=L7CVjARLGo3S48L2w8aLZ4TGTn0DhlCdoG5RuQXFUlmeDMgg-vYs4e2Xdd7FJvYW0Vp~mhltmcd9UF5CflNsdn-ZNEgfMcCWCycjsEnyI37RcabzMBJH4MXK0fW3Lqiu3jwIR9T2t2I0YPuts7IdGTlPhfmwpyeUATNxswSncoRbNdxo6S2JSQyCWChGZsmZ~dfW4aSInQKn1sEOaPD2cIRsaRswtbHNn4jhgwkp8eaitQDrkUBPphRS-Z13LYC3GPdnnz9y1nzQmwCX2Tl7X871YOH31HaC-ApdKxWdAoYgvfsKaX-3MhdtL05RBv7Fa-fB2THrBlg0nGBEIU-F1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <div className="text-center text-gray-800 text-sm font-semibold leading-tight">
                Tomato
              </div>
            </div>
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  +
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-8 p-2 bg-white rounded-[99px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-gray-800 text-xl font-semibold leading-loose">
                  2
                </div>
              </div>
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  -
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[183px] px-[18px] py-6 bg-white rounded-[32px] border border-slate-100 justify-start items-start gap-2.5 flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-3 inline-flex">
            <div className="w-[104px] h-[59px] py-[5px] justify-center items-center inline-flex">
              <div className="w-[104px] h-[49px] justify-center items-center inline-flex">
                <img
                  className="w-[94.10px] h-[60.39px] origin-top-left rotate-[-17.07deg]"
                  src="https://s3-alpha-sig.figma.com/img/c46f/4074/6bea6a4e6a415937f27c31006ad5a66c?Expires=1694390400&Signature=heLb7YTaUg~QUZ9XtlzCdBTm0LZ2I9pFTssyifqH8-VyHq8WU6kSYAngC76B7YrZKFDmpUBswOTMC0U0JYd7vBMvaJQdE1XcsiUiUnL4Ot4hk5yByP0MMET5rq0TcJ8M9eLnElKqOAztrL4fxKNqfjp0N780yPINpTN0VmdLFSXt9i~1-82VMTAYCxAEV1~ldPZveF-B66Q969SpP7YpTMFOw6SahNOiRBFDfwVqzTnm-xHQUxUmwcYet3vhLARlsH-GzA3Qsj1fRwoNAwm-QTXSJMprFHEpUXmVnVi1JtlhYBXXkJVlsnj9Ucc~pP6s29YLt7kcR3u2CQEBAjvjvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <div className="text-center text-gray-800 text-sm font-semibold leading-tight">
                Cucumber
              </div>
            </div>
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  +
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-8 p-2 bg-white rounded-[99px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-gray-800 text-xl font-semibold leading-loose">
                  4
                </div>
              </div>
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  -
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[183px] px-[18px] py-6 bg-white rounded-[32px] border border-slate-100 justify-start items-start gap-2.5 flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-3 inline-flex">
            <div className="w-[104px] h-[59px] py-[5px] justify-center items-center inline-flex">
              <div className="w-[104px] h-[49px] pt-[14.16px] pb-[14.55px] justify-center items-center inline-flex">
                <img
                  className="w-[104px] h-[20.29px]"
                  src="https://s3-alpha-sig.figma.com/img/086b/e6bf/3b4e587e128eb5982f3817bff051f9c7?Expires=1694390400&Signature=X1DEvaVerQqIUMgqRTRMU64AM6ytaStmp2R0gx16ec1gE2OCMbhMw6kTgX3x7-HMuMYicShPzGrVoO5TLZt8GXh6VOPDsixYqpXDq70KOi3XYqcD0H7VQJH~AZZHhYRzJHg0tt~y88kUo-a5YDdijlvWT4By7R8bCwFNaBtZ5HEnO4kYN1QCz4VSJ9-ChZ-ZcCok73M~TDe4bH3XvQ-BfPCJTIgIhsW5T6O0vGNc2DWfQLxsYqt8aSw4ArivMREKJpm4NWK9Q-hLSds-2RhaIYQgG8ElNac~EQJM7cykurHh2ygXvnZUb0uh33ujsgiq9GLp3-dWznTImx7~UIeMJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <div className="text-center text-gray-800 text-sm font-semibold leading-tight">
                Cheese
              </div>
            </div>
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  +
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-8 p-2 bg-white rounded-[99px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-gray-800 text-xl font-semibold leading-loose">
                  2
                </div>
              </div>
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  -
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[183px] px-[18px] py-6 bg-white rounded-[32px] border border-slate-100 justify-start items-start gap-2.5 flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-3 inline-flex">
            <div className="w-[104px] h-[59px] py-[5px] justify-center items-center inline-flex">
              <div className="w-[104px] h-[49px] pt-[9.57px] pb-[9.95px] justify-center items-center inline-flex">
                <img
                  className="w-[104px] h-[29.48px]"
                  src="https://s3-alpha-sig.figma.com/img/004e/2683/3fb3ff55365c76db31d70a4feb72c36f?Expires=1694390400&Signature=oJqapkPrcS0b8lTBQnvQGWWYFe3SNBj1~n8atjAM1wpgKClUt6dQDZHMyiR8u-6irW7siwPV6lH8iAiBcjMerFWnZ4Djok~9a2yKhv~DbI4pB3eAvEZFOJqvMVPTNdTJddjpSGbETxWc-I7v1N3e17RRhpmme7loUIY7GDMY~MzDt7rOVGtwcneTeV9iyBCXOtRQYjxKgf8YOoMLLY1nUDUA1YtboGqNTBS2C0PizbYr0AXiWL~9LBGvD8H-OH0tWeI9HWh65fI8m11aUaJxq19Fs0ffQAgJDs6nyHMqGmQNr9hIn0PC2XVdXKYdYFXhGNKJ5jiQiedk1~w7XQqIQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <div className="text-center text-gray-800 text-sm font-semibold leading-tight">
                Salad
              </div>
            </div>
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  +
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-8 p-2 bg-white rounded-[99px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-gray-800 text-xl font-semibold leading-loose">
                  2
                </div>
              </div>
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  -
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[183px] px-[18px] py-6 bg-white rounded-[32px] border border-slate-100 justify-start items-start gap-2.5 flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-3 inline-flex">
            <div className="w-[104px] h-[59px] py-[5px] justify-center items-center inline-flex">
              <div className="w-[104px] h-[49px] justify-center items-center inline-flex">
                <img
                  className="w-[104px] h-[49px]"
                  src="https://s3-alpha-sig.figma.com/img/429a/c92c/7a0e246a51e5ab6bf1848f5a9f54e16b?Expires=1694390400&Signature=B1VmsUe8FFS0R84ANKMC7AUxedZeBWb1ar8wmEM~8e1RVPmYgWRP3sx2lQoZGICub6XFu1Kako2Kk-YgqxHZtzwpO2nJHb9or2e2FjAox-j3YLWGrMb8Fe5QZr79ttYSOvSlt9ItCvGbmrGNxDY6LIdVYLgsmi5MX3xk5c~8u2EOn9~sGkZ4gxU~7YodfTkow3PUt8~HOKpCPg5TLr0~lK2z0HF83GNOKiAvjyr9UNOFXXCq8gPl4~9V26GX8tpDrXM7rrmrv6kUnaoeLUQBBgNiRzsMbRTA-QFNMY2XLDIUwxkV0lfCl5liPVNiyNdBQp7LTbfA4uQ2F3IPwAXwpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <div className="text-center text-gray-800 text-sm font-semibold leading-tight">
                Bun
              </div>
            </div>
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  -
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-8 p-2 bg-white rounded-[99px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-gray-800 text-xl font-semibold leading-loose">
                  0
                </div>
              </div>
              <div className="bg-violet-50 rounded-[99px] justify-start items-center flex">
                <div className="p-1.5 justify-center items-center gap-1 flex">
                  -
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-[1279px] top-[691px] absolute justify-start items-center gap-2 inline-flex">
        <div className="text-red-500 text-xl font-semibold leading-loose">
          + Tomato Ketchup
        </div>
        <div className="text-gray-800 text-xl font-semibold leading-loose">
          1.2 oz
        </div>
      </div>
      <div className="left-[188px] top-[365px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="text-gray-800 text-7xl font-bold leading-[80px]">
          Make
          <br />
          Your
          <br />
          Burger
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
