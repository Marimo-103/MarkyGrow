import React from "react";
import Container from "../Components/Container";
import ParagraphText from "../Layers/ParagraphText";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Button from "../Layers/Button";
import banner01 from "../assets/banner_img1.png";
import banner02 from "../assets/banner_img2.png";
import bannerIllustration from "../assets/bannerIllustration.svg";

const Introduction = () => {
  return (
    <section id="banner" className="pt-5 md:pt-8 lg:pt-[53px]">
      <Container className="flex flex-col gap-y-10 md:flex-row md:justify-between md:items-center">
        <div className="texts lg:w-[700px] md:w-[400px] w-full flex flex-col items-start justify-start lg:gap-y-12 md:gap-y-8 gap-y-6">
          <h1 className="lg:text-7xl md:text-5xl text-4xl md:w-auto w-[380px] text-headingText font-semibold leading-[110%] tracking-tight">
            Stay ahead of the curve with our forward-thinking
          </h1>
          <ParagraphText
            text="An award-winning SEO agency with disciplines in digital marketing, design,
              and website development. focused on understanding you."
          />
          <Button className="relative group" href="">
            Schedule Call{" "}
            <FaArrowRight className="md:text-xl text-base group-hover:invisible group-hover:opacity-0 duration-300" />
            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-[-1] group-hover:translate-x-[120%] duration-300">
              <FaWhatsapp className="md:text-3xl text-xl" />
            </div>
          </Button>
          <div className="sponsors flex lg:flex-row flex-col lg:items-center lg:gap-16 md:gap-3 gap-2">
            <p className="lg:w-[150px] text-sm text-headingText font-semibold leading-[160%]">
              Trusted by the world's biggest brands:
            </p>
            <div className="svg flex items-center md:gap-7 gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="109"
                  height="34"
                  viewBox="0 0 109 34"
                  fill="none"
                >
                  <path
                    d="M8.87308 18.1833C8.87308 16.3737 7.51207 15.102 5.84026 15.102C4.16844 15.102 2.80742 16.3952 2.80742 18.1833C2.80742 19.9499 4.16844 21.2647 5.84026 21.2647C7.51376 21.263 8.87308 19.9928 8.87308 18.1833ZM8.89698 23.5691V22.1686C8.07217 23.1385 6.84436 23.7406 5.37406 23.7406C2.31902 23.7406 0 21.3702 0 18.1833C0 15.0162 2.40782 12.6045 5.44236 12.6045C6.87001 12.6045 8.07392 13.2083 8.89867 14.1551V12.7975H11.6412V23.5691H8.89698Z"
                    fill="#9688B7"
                  />
                  <path
                    d="M24.9627 21.1772C24.003 21.1772 23.7366 20.8324 23.7366 19.9285V15.1465H25.4989V12.7975H23.7366V10.1698H20.9257V12.7975H17.3055V12.1427C17.3055 11.2371 17.6624 10.8923 18.6443 10.8923H19.2608V8.80234H17.9083C15.5892 8.80234 14.4963 9.53473 14.4963 11.7748V12.7959H12.9355V15.1448H14.4963V23.5674H17.3072V15.1448H20.9274V20.4233C20.9274 22.6205 21.7967 23.5691 24.0713 23.5691H25.5211V21.1772H24.9627Z"
                    fill="#9688B7"
                  />
                  <path
                    d="M35.0432 17.2133C34.8434 15.8128 33.66 14.9732 32.2785 14.9732C30.8952 14.9732 29.758 15.7914 29.4694 17.2133H35.0432ZM29.4455 18.8942C29.647 20.4877 30.8287 21.3933 32.3229 21.3933C33.5046 21.3933 34.4199 20.8538 34.9544 19.9928H37.8318C37.1624 22.2758 35.0432 23.7406 32.2563 23.7406C28.8887 23.7406 26.5253 21.4576 26.5253 18.2047C26.5253 14.9518 29.0237 12.6028 32.3246 12.6028C35.6478 12.6028 38.0556 14.9733 38.0556 18.2047C38.0556 18.4422 38.0334 18.6781 37.9889 18.8942H29.4455Z"
                    fill="#9688B7"
                  />
                  <path
                    d="M55.9264 18.1833C55.9264 16.438 54.5654 15.102 52.8935 15.102C51.2217 15.102 49.8607 16.3952 49.8607 18.1833C49.8607 19.9499 51.2217 21.2647 52.8935 21.2647C54.5654 21.263 55.9264 19.9285 55.9264 18.1833ZM47.0943 12.7975H49.8368V14.198C50.6616 13.2066 51.8877 12.6045 53.3597 12.6045C56.3703 12.6045 58.7338 14.9964 58.7338 18.1618C58.7338 21.3289 56.3259 23.7422 53.2931 23.7422C51.8877 23.7422 50.7282 23.2028 49.9256 22.2989V28.0014H47.0943V12.7975Z"
                    fill="#9688B7"
                  />
                  <path
                    d="M68.6195 18.1833C68.6195 16.3737 67.2602 15.102 65.5865 15.102C63.9148 15.102 62.5538 16.3952 62.5538 18.1833C62.5538 19.9499 63.9148 21.2647 65.5865 21.2647C67.2602 21.263 68.6195 19.9928 68.6195 18.1833ZM68.6435 23.5691V22.1686C67.8187 23.1385 66.5906 23.7406 65.1202 23.7406C62.0654 23.7406 59.7464 21.3702 59.7464 18.1833C59.7464 15.0162 62.1542 12.6045 65.1871 12.6045C66.6146 12.6045 67.8187 13.2083 68.6435 14.1551V12.7975H71.3862V23.5691H68.6435Z"
                    fill="#9688B7"
                  />
                  <path
                    d="M42.1505 13.8532C42.1505 13.8532 42.849 12.6045 44.5583 12.6045C45.2892 12.6045 45.7623 12.847 45.7623 12.847V15.5952C45.7623 15.5952 44.7308 14.9799 43.783 15.1036C42.8353 15.2273 42.2359 16.0686 42.2393 17.1936V23.5707H39.408V12.7992H42.1505V13.8532Z"
                    fill="#9688B7"
                  />
                  <path
                    d="M84.1949 12.7975L77.2704 27.9667H74.3504L77.069 22.1026L72.4721 12.7975H75.7818L78.4712 19.0146L81.2308 12.7975H84.1949Z"
                    fill="#9688B7"
                  />
                  <path
                    d="M106.3 12.5534L99.4348 8.72645C97.4195 7.60312 94.9008 9.00688 94.9008 11.2552V11.6478C94.9008 12.0024 95.097 12.3307 95.4146 12.5072L96.7109 13.2297C97.0915 13.4425 97.5662 13.1769 97.5662 12.753V11.7765C97.5662 11.2882 98.1131 10.983 98.5502 11.2272L104.496 14.5427C104.934 14.7869 104.934 15.3972 104.496 15.6397L98.5502 18.9553C98.1131 19.1994 97.5662 18.8942 97.5662 18.406V17.8863C97.5662 15.638 95.0476 14.2326 93.031 15.3576L86.1662 19.1845C84.151 20.3079 84.151 23.1187 86.1662 24.242L93.031 28.069C95.0457 29.1923 97.5662 27.7886 97.5662 25.5402V25.1476C97.5662 24.793 97.3701 24.4664 97.0525 24.2882L95.7562 23.5641C95.3756 23.3513 94.9008 23.6169 94.9008 24.0408V25.0174C94.9008 25.5056 94.3547 25.8107 93.9169 25.5666L87.9711 22.251C87.534 22.0069 87.534 21.3966 87.9711 21.1525L93.9169 17.8368C94.3547 17.5927 94.9008 17.8979 94.9008 18.3862V18.9058C94.9008 21.1541 97.4195 22.5595 99.4348 21.4345L106.3 17.6076C108.315 16.4875 108.315 13.6767 106.3 12.5534Z"
                    fill="#9688B7"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="115"
                  height="34"
                  viewBox="0 0 115 34"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_394)">
                    <path
                      d="M33.8109 11.1575H38.6138C41.2742 11.1575 42.6554 12.2484 42.6554 14.2967V14.3987C42.6933 14.9989 42.5146 15.5928 42.1516 16.0724C41.7887 16.552 41.2657 16.8854 40.6778 17.012C41.3819 17.074 42.0331 17.4112 42.4901 17.9505C42.947 18.4897 43.1728 19.1875 43.1185 19.8922V19.9629C43.1185 22.1995 41.6509 23.3767 38.8335 23.3767H33.8109V11.1575ZM38.1664 16.1723C39.5006 16.1723 40.0264 15.6936 40.0264 14.6027V14.5321C40.0264 13.5119 39.4456 13.0489 38.1507 13.0489H36.5105V16.188L38.1664 16.1723ZM38.4019 21.4539C39.7674 21.4539 40.3874 20.834 40.3874 19.7274V19.6568C40.3874 18.5267 39.7674 17.9538 38.2685 17.9538H36.5105V21.4618L38.4019 21.4539Z"
                      fill="#9688B7"
                    />
                    <path
                      d="M43.8406 20.8889C43.8406 18.8014 45.7476 18.0166 48.4865 18.0166H49.4911V17.6634C49.4911 16.604 49.1693 16.0232 48.0392 16.0232C47.8563 16.0015 47.6708 16.0175 47.4943 16.0701C47.3178 16.1228 47.1539 16.211 47.0127 16.3293C46.8716 16.4477 46.7561 16.5937 46.6735 16.7584C46.5909 16.923 46.5429 17.1028 46.5324 17.2867H44.178C44.335 15.1678 46.0066 14.2261 48.1961 14.2261C50.3857 14.2261 51.9317 15.1129 51.9317 17.5379V23.361H49.5224V22.2858C49.2201 22.7119 48.8124 23.0522 48.3393 23.2737C47.8661 23.4951 47.3436 23.5901 46.8228 23.5494C45.2061 23.5494 43.8406 22.7646 43.8406 20.8889ZM49.4911 20.2375V19.4528H48.5336C47.0974 19.4528 46.2656 19.7667 46.2656 20.7163C46.2656 21.3676 46.658 21.7993 47.5605 21.7993C48.6513 21.8307 49.4911 21.2264 49.4911 20.2375Z"
                      fill="#9688B7"
                    />
                    <path
                      d="M52.9754 20.5593H55.2826C55.3847 21.3441 55.7771 21.8307 56.8522 21.8307C57.8097 21.8307 58.257 21.4697 58.257 20.8497C58.257 20.2297 57.7233 19.9786 56.4441 19.7981C54.0898 19.4371 53.148 18.7543 53.148 17.0121C53.148 15.2698 54.8588 14.2261 56.6796 14.2261C58.6651 14.2261 60.1483 14.9481 60.3681 16.9964H58.1C57.9666 16.2587 57.5507 15.9212 56.7031 15.9212C55.8555 15.9212 55.4396 16.2979 55.4396 16.8394C55.4396 17.3809 55.8634 17.6242 57.1583 17.8126C59.3949 18.1343 60.627 18.6994 60.627 20.6142C60.627 22.5291 59.2301 23.5494 56.8679 23.5494C54.5057 23.5494 53.0617 22.4899 52.9754 20.5593Z"
                      fill="#9688B7"
                    />
                    <path
                      d="M61.2627 19.0054V18.872C61.233 18.2587 61.3309 17.6459 61.5504 17.0724C61.7699 16.4989 62.106 15.9772 62.5377 15.5405C62.9692 15.1037 63.4869 14.7614 64.0577 14.5351C64.6285 14.3088 65.2401 14.2036 65.8538 14.226C68.161 14.226 70.2093 15.5759 70.2093 18.77V19.4527H63.7976C63.8604 20.936 64.6687 21.8071 66.0107 21.8071C67.1565 21.8071 67.7215 21.3127 67.8785 20.5593H70.2329C69.9425 22.4899 68.4043 23.565 65.9636 23.565C63.2247 23.5493 61.2627 21.862 61.2627 19.0054ZM67.8 17.9302C67.7215 16.5804 67.0309 15.9683 65.8538 15.9683C65.3238 15.9658 64.8135 16.1688 64.4301 16.5346C64.0466 16.9005 63.8199 17.4007 63.7976 17.9302H67.8Z"
                      fill="#9688B7"
                    />
                    <path
                      d="M70.8607 19.0053V18.8719C70.8308 18.2572 70.9292 17.6431 71.1496 17.0685C71.37 16.4939 71.7076 15.9714 72.1409 15.5344C72.5742 15.0974 73.0938 14.7554 73.6665 14.5301C74.2392 14.3049 74.8525 14.2013 75.4674 14.226C77.5393 14.226 79.4463 15.1285 79.6739 17.6947H77.3195C77.3039 17.4745 77.2441 17.2596 77.1438 17.0629C77.0434 16.8662 76.9046 16.6916 76.7355 16.5496C76.5664 16.4076 76.3705 16.301 76.1594 16.2362C75.9483 16.1713 75.7263 16.1496 75.5067 16.1722C74.2275 16.1722 73.372 17.1297 73.372 18.8405V18.9739C73.372 20.7711 74.1568 21.6893 75.5616 21.6893C75.8006 21.7031 76.04 21.6691 76.2657 21.5895C76.4915 21.5098 76.6992 21.386 76.8766 21.2254C77.0541 21.0647 77.1979 20.8703 77.2995 20.6535C77.4011 20.4368 77.4586 20.202 77.4686 19.9628H79.7053C79.5719 22.0817 78.0337 23.5493 75.436 23.5493C72.8384 23.5493 70.8607 21.9248 70.8607 19.0053Z"
                      fill="#9688B7"
                    />
                    <path
                      d="M80.2783 20.8889C80.2783 18.8014 82.1853 18.0166 84.9164 18.0166H85.9288V17.6634C85.9288 16.604 85.5992 16.0232 84.4769 16.0232C84.2928 15.9992 84.1057 16.0134 83.9273 16.065C83.7489 16.1165 83.5831 16.2044 83.4402 16.323C83.2973 16.4416 83.1804 16.5884 83.0968 16.7542C83.0132 16.92 82.9648 17.1013 82.9544 17.2867H80.6001C80.757 15.1678 82.4286 14.226 84.6103 14.226C86.7921 14.226 88.3538 15.1129 88.3538 17.5379V23.361H85.9445V22.2858C85.6421 22.7119 85.2345 23.0522 84.7613 23.2737C84.2881 23.4951 83.7656 23.5901 83.2448 23.5493C81.6752 23.5493 80.2783 22.7645 80.2783 20.8889ZM85.9288 20.2375V19.4527H84.987C83.5509 19.4527 82.7112 19.7667 82.7112 20.7162C82.7112 21.3676 83.1114 21.7993 84.0139 21.7993C85.1205 21.8306 85.9602 21.2264 85.9602 20.2375H85.9288Z"
                      fill="#9688B7"
                    />
                    <path
                      d="M90.0958 14.3987H92.5679V15.7642C92.8375 15.279 93.2342 14.8765 93.7154 14.6C94.1966 14.3234 94.7441 14.1833 95.299 14.1946C95.8286 14.1523 96.3577 14.2822 96.8074 14.565C97.2571 14.8479 97.6034 15.2685 97.7946 15.7642C98.1242 15.2719 98.5721 14.8703 99.0973 14.596C99.6224 14.3218 100.208 14.1838 100.8 14.1946C102.456 14.1946 103.735 15.2384 103.735 17.6084V23.3296H101.279V17.9145C101.279 16.7687 100.769 16.2586 99.8743 16.2586C99.6363 16.2483 99.3989 16.2894 99.1782 16.3792C98.9576 16.4689 98.7589 16.6053 98.5957 16.7789C98.4326 16.9524 98.3088 17.1592 98.2328 17.385C98.1569 17.6108 98.1305 17.8503 98.1556 18.0872V23.3609H95.6914V17.9145C95.6914 16.7687 95.1656 16.2586 94.2944 16.2586C94.0558 16.2471 93.8175 16.2873 93.5959 16.3766C93.3743 16.4659 93.1746 16.602 93.0106 16.7758C92.8466 16.9495 92.7221 17.1566 92.6457 17.383C92.5692 17.6094 92.5427 17.8496 92.5679 18.0872V23.3609H90.0958V14.3987Z"
                      fill="#9688B7"
                    />
                    <path
                      d="M105.431 14.3987H107.911V15.8034C108.206 15.3121 108.624 14.9057 109.123 14.6237C109.622 14.3418 110.186 14.1939 110.759 14.1946C112.949 14.1946 114.683 15.8191 114.683 18.7699V18.9112C114.683 21.862 113.012 23.5179 110.759 23.5179C110.187 23.5414 109.618 23.4076 109.116 23.1309C108.614 22.8542 108.197 22.4452 107.911 21.9483V26.4059H105.431V14.3987ZM112.141 18.7935C112.141 16.9806 111.254 16.0938 110.006 16.0938C108.758 16.0938 107.824 16.9963 107.824 18.7935V18.9269C107.824 20.7162 108.68 21.5873 110.03 21.5873C111.379 21.5873 112.141 20.677 112.141 18.9583V18.7935Z"
                      fill="#9688B7"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.4626 6.89219C8.49879 6.89219 4.86709 12.7906 2.8337 18.5558C2.5879 19.2527 1.82368 19.6184 1.12676 19.3726C0.628295 19.1968 0.299272 18.7558 0.24225 18.2639C0.219548 18.068 0.239958 17.8641 0.309951 17.6657C2.37316 11.816 6.58935 4.21606 15.4626 4.21606C20.1006 4.21606 23.4204 7.28441 25.5674 10.9706C27.72 14.6666 28.8678 19.2429 29.1264 22.9379C29.145 23.2035 29.0839 23.4686 28.951 23.6993C27.7076 25.8577 25.6391 27.2643 23.2811 28.1258C20.929 28.9852 18.2044 29.3362 15.4734 29.3371C13.153 29.3733 10.8521 28.909 8.72738 27.9756C6.59929 27.0408 4.6981 25.6576 3.15376 23.9204C2.82522 23.5508 2.72727 23.0302 2.89905 22.5665L2.90006 22.5638L2.90198 22.5587L2.90852 22.5412L2.93221 22.4787C2.95264 22.4253 2.98225 22.3486 3.02041 22.252C3.09666 22.059 3.20735 21.7857 3.34728 21.4587C3.62593 20.8076 4.02624 19.93 4.50712 19.044C4.98167 18.1696 5.56522 17.2297 6.22145 16.4891C6.81969 15.8139 7.74957 14.9915 8.93977 14.9834L8.94884 14.9833C9.78986 14.9833 10.4807 15.3684 10.978 15.7386C11.4793 16.1117 11.9345 16.5859 12.2993 16.972C12.3411 17.0163 12.3818 17.0594 12.4214 17.1014C12.7611 17.4616 13.0209 17.7371 13.2678 17.9433C13.2955 17.9665 13.321 17.987 13.3442 18.005C13.4245 17.923 13.5203 17.8154 13.6306 17.6787C14.0227 17.1926 14.4632 16.5077 14.8895 15.7745C15.3102 15.0509 15.693 14.3221 15.9722 13.7708C16.1112 13.496 16.2235 13.2676 16.3005 13.1086C16.339 13.0292 16.3687 12.9673 16.3885 12.9257L16.4106 12.8792L16.4158 12.8681L16.4169 12.8657C16.7306 12.1967 17.5274 11.9082 18.1965 12.2218C18.8656 12.5355 19.1538 13.3322 18.8402 14.0013L18.8373 14.0075L18.8303 14.0222L18.8046 14.0764C18.7823 14.1232 18.75 14.1908 18.7086 14.2761C18.6258 14.4468 18.5067 14.6892 18.3597 14.9796C18.0667 15.5583 17.6584 16.3363 17.203 17.1195C16.7533 17.8931 16.2329 18.715 15.7135 19.3589C15.4559 19.6782 15.1639 19.9976 14.8482 20.2488C14.5691 20.4708 14.0768 20.7986 13.4457 20.7986C12.6112 20.7986 11.9536 20.3327 11.5517 19.9968C11.173 19.6803 10.7946 19.2781 10.4768 18.9401C10.4348 18.8955 10.3939 18.8521 10.3542 18.81C9.97741 18.4113 9.66941 18.1007 9.38 17.8852C9.12634 17.6964 8.99684 17.6654 8.95965 17.6604C8.95965 17.6604 8.95698 17.6614 8.95464 17.6622C8.91373 17.6767 8.66794 17.7633 8.22439 18.2639C7.7645 18.7829 7.29398 19.5194 6.85916 20.3206C6.43066 21.1101 6.0663 21.9071 5.80761 22.5116C5.77427 22.5895 5.74279 22.6639 5.71324 22.7346C6.89088 23.908 8.27732 24.855 9.80368 25.5255C11.5791 26.3054 13.5019 26.6928 15.4408 26.6612L15.4626 26.661C17.9939 26.661 20.3898 26.333 22.3627 25.6122C24.1778 24.949 25.5624 23.9825 26.423 22.6994C26.1314 19.4111 25.0839 15.4578 23.2549 12.3175C21.3406 9.03092 18.7431 6.89219 15.4626 6.89219ZM13.1243 18.1951C13.1243 18.1951 13.1301 18.1907 13.1414 18.1849C13.1298 18.1928 13.1243 18.1951 13.1243 18.1951Z"
                      fill="#9688B7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_394">
                      <rect
                        width="114.552"
                        height="33.3241"
                        fill="white"
                        transform="translate(0.233398)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="34"
                  viewBox="0 0 100 34"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_396)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.4083 24.8903C0.150655 22.6518 0.150691 19.0225 2.40837 16.784L8.54031 10.7042C10.4489 8.81184 13.3598 8.51918 15.5784 9.82618C16.2647 10.2304 16.2587 11.1578 15.6942 11.7175C15.1298 12.2771 14.2084 12.2289 13.4423 12.0067C12.4613 11.7222 11.358 11.9636 10.5843 12.7307L4.45233 18.8106C3.32349 19.9298 3.32348 21.7445 4.4523 22.8637C5.58115 23.983 7.4114 23.983 8.54024 22.8637L20.804 10.7042C23.0618 8.46573 26.7221 8.46572 28.9799 10.7042L35.1119 16.784C37.3696 19.0224 37.3696 22.6518 35.1119 24.8903C32.8542 27.1288 29.1938 27.1288 26.936 24.8903L24.8921 22.8637L22.3371 25.397C20.4286 27.2893 17.5176 27.5819 15.299 26.2749C14.6127 25.8707 14.6188 24.9433 15.1832 24.3837C15.7476 23.824 16.6689 23.8722 17.4351 24.0943C18.4162 24.3789 19.5194 24.1375 20.2931 23.3704L22.9211 20.7648C24.0097 19.6855 25.7745 19.6855 26.8631 20.7648L28.98 22.8637C30.1089 23.983 31.939 23.983 33.0679 22.8637C34.1967 21.7445 34.1967 19.9298 33.0679 18.8106L26.9359 12.7308C25.807 11.6116 23.9769 11.6116 22.848 12.7308L10.5842 24.8904C8.32649 27.1289 4.66599 27.1289 2.4083 24.8903Z"
                      fill="#9688B7"
                    />
                    <path
                      d="M59.8966 12.2741C58.476 12.2741 57.3998 12.7828 56.6895 13.8002C56.0653 12.7828 55.0751 12.2741 53.7622 12.2741C52.4061 12.2741 51.416 12.7404 50.7702 13.6942V12.5708H47.9936V23.1687H50.7702V17.2126C50.7702 15.6654 51.5666 14.8176 52.7936 14.8176C53.9343 14.8176 54.6016 15.5594 54.6016 16.8312V23.1687H57.3783V17.2126C57.3783 15.6654 58.1101 14.8176 59.3801 14.8176C60.5209 14.8176 61.188 15.5594 61.188 16.8312V23.1687H63.9647V16.6404C63.9647 13.9909 62.3719 12.2741 59.8966 12.2741Z"
                      fill="#9688B7"
                    />
                    <path
                      d="M74.287 13.8214C73.4475 12.7828 72.2852 12.2741 70.7785 12.2741C69.3364 12.2741 68.1095 12.8252 67.0764 13.9061C66.0647 14.9871 65.5481 16.3013 65.5481 17.8698C65.5481 19.4382 66.0647 20.7736 67.0764 21.8546C68.1095 22.9355 69.3364 23.4654 70.7785 23.4654C72.2852 23.4654 73.4475 22.9567 74.287 21.9181V23.1687H77.0638V12.5708H74.287V13.8214ZM69.1642 20.0317C68.6046 19.4594 68.3247 18.7387 68.3247 17.8698C68.3247 17.0007 68.6046 16.2801 69.1642 15.729C69.7238 15.1567 70.4341 14.8811 71.2951 14.8811C72.1561 14.8811 72.8664 15.1567 73.426 15.729C74.0072 16.2801 74.287 17.0007 74.287 17.8698C74.287 18.7387 74.0072 19.4594 73.426 20.0317C72.8664 20.5828 72.1561 20.8583 71.2951 20.8583C70.4341 20.8583 69.7238 20.5828 69.1642 20.0317Z"
                      fill="#9688B7"
                    />
                    <path
                      d="M87.3089 14.3936V12.5708H79.2373V15.1355H83.5634L79.0214 21.3458V23.1686H87.524V20.6039H82.7451L87.3089 14.3936Z"
                      fill="#9688B7"
                    />
                    <path
                      d="M99.1336 18.9931C99.1983 18.5904 99.2411 18.2301 99.2411 17.8698C99.2411 16.2801 98.7252 14.9659 97.6918 13.8849C96.6802 12.804 95.3671 12.2741 93.7959 12.2741C92.1383 12.2741 90.7611 12.804 89.7059 13.8849C88.6515 14.9447 88.113 16.2801 88.113 17.8698C88.113 19.4806 88.6515 20.816 89.7278 21.8757C90.804 22.9355 92.2247 23.4654 94.011 23.4654C96.077 23.4654 97.6489 22.7024 98.7034 21.1975L96.4651 19.9257C95.9266 20.6252 95.1091 20.9855 94.0539 20.9855C92.397 20.9855 91.3854 20.3285 91.0191 18.9931H99.1336ZM90.9762 16.8735C91.2989 15.517 92.3105 14.7328 93.7959 14.7328C95.0655 14.7328 96.1417 15.4322 96.4651 16.8735H90.9762Z"
                      fill="#9688B7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_396">
                      <rect
                        width="98.5839"
                        height="33.3241"
                        fill="white"
                        transform="translate(0.715088)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="figures lg:w-[588px] md:w-[330px] flex flex-wrap gap-y-4 lg:gap-y-5 justify-between">
          <div className="lg:w-[300px] lg:h-[281px] md:w-[150px] w-[169px] md:h-[158px] md:rounded-[20px] rounded-xl">
            <img src={bannerIllustration} alt="" className="h-full w-full" />
          </div>
          <div className="lg:w-[259px] lg:h-[281px] md:w-[150px] w-[169px] md:h-[158px] md:rounded-[20px] rounded-xl bg-slate-300">
            <img src={banner01} alt="" className="h-full w-full" />
          </div>
          <div className="w-full bg-slate-400 lg:h-[216px] rounded-[20px]">
            <img src={banner02} alt="" className="h-full w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
