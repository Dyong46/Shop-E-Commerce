import Header from '~/components/Header';
import Footer from '~/components/Footer';
import './style.scss';
import { useState } from 'react';

const ProductDetail = () => {
  const handleClick = (event) => {
    // console.log(event.target.className);
    let handle = event.target.className.substring(64, 69);
    let quantity = document.querySelector('.quantity');
    let plusQuantity = parseInt(quantity.value);
    if (handle == 'plus') {
      if (plusQuantity > 0) {
        plusQuantity++;
        quantity.value = plusQuantity;
      }
    } else if (handle == 'mimus') {
      if (quantity.value == 1) {
        quantity.value = 1;
      } else {
        plusQuantity--;
        quantity.value = plusQuantity;
      }
    }
  };

  const [selectedDiv, setSelectedDiv] = useState(null);
  const handleClickModel = (divId, event) => {
    console.log(event.target);
    if (selectedDiv === divId) {
      setSelectedDiv(null); // Bỏ chọn nếu thẻ đã được chọn
    } else {
      setSelectedDiv(divId); // Chọn thẻ mới
    }
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const handleClickSize = (sizeId, event) => {
    console.log(event.target);
    if (selectedSize === sizeId) {
      setSelectedSize(null); // Bỏ chọn nếu thẻ đã được chọn
    } else {
      setSelectedSize(sizeId); // Chọn thẻ mới
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const handleClickImage = (imageId, event) => {
    if (selectedImage === imageId) {
      setSelectedImage(null); // Bỏ chọn nếu thẻ đã được chọn
      const setImage = document.querySelector('.sizes');
      setImage.src = 'https://down-vn.img.susercontent.com/file/vn-11134211-7qukw-lhb95cykndo351';
    } else {
      setSelectedImage(imageId); // Chọn thẻ mới
      const setImage = document.querySelector('.sizes');
      setImage.src = event.target.getAttribute('src');
    }
  };

  const [selectedComment, setSelectedComment] = useState(null);
  const handleClickComment = (commentId, event) => {
    if (selectedComment === commentId) {
      setSelectedComment(null); // Bỏ chọn nếu thẻ đã được chọn
    } else {
      setSelectedComment(commentId); // Chọn thẻ mới
      console.log(event.target);
    }
  };

  const [selectedCommentImage, setSelectedCommentImage] = useState(null);
  const handleClickCommentImage = (commentImageId, event) => {
    if (selectedCommentImage === commentImageId) {
      setSelectedCommentImage(null);
      const getImage = document.querySelector('.imga');
      getImage.classList.replace('block', 'hidden'); // Bỏ chọn nếu thẻ đã được chọn
    } else {
      setSelectedCommentImage(commentImageId);
      // lay img
      const getImage = document.querySelector('.imga');
      // lay div img
      getImage.classList.replace('hidden', 'block');
      const url = event.target.style.getPropertyValue('background-image').replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
      getImage.src = url;
    }
  };

  const showAddress = () => {
    let get = document.querySelector('.address');
    if (get.style.display === 'none') {
      get.style.display = 'block';
      // document.body.style.overflow = 'hidden';
    } else {
      get.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };
  const showNewAddress = () => {
    let get = document.querySelector('.newAddress');
    if (get.style.display === 'none') {
      let getAd = document.querySelector('.address');
      getAd.style.display = 'none';
      get.style.display = 'block';
      // document.body.style.overflow = 'hidden';
    } else {
      let getAd = document.querySelector('.address');
      getAd.style.display = 'block';
      get.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };

  const dataImage = [
    {
      id: 1,
      item: 'https://down-vn.img.susercontent.com/file/vn-11134211-7qukw-lhb95cykkkj716_tn',
    },
    {
      id: 2,
      item: 'https://down-vn.img.susercontent.com/file/vn-11134211-23010-1b7ky2gkc1lv1f',
    },
    {
      id: 3,
      item: 'https://down-vn.img.susercontent.com/file/vn-11134201-23020-d8o60f2hn2nvdd',
    },
    {
      id: 4,
      item: 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-4g7zng465fov94',
    },
    {
      id: 5,
      item: 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-1m418l5jgiov67',
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex flex-col bg-pro justify-center">
        <div className="flex justify-center">
          <div className="bg-white max-w-6xl mt-5 flex flex-auto flex-row px-4 py-4">
            <div className="">
              <img
                className="sizes"
                src="https://down-vn.img.susercontent.com/file/vn-11134211-7qukw-lhb95cykndo351"
                alt=""
              />
              <div className="flex flex-row flex-auto">
                {dataImage.map((data) => (
                  <div className="pr-2 pt-1 cursor-pointer" key={data.id}>
                    <img
                      className="w-24"
                      src={data.item}
                      alt=""
                      onClick={(event) => {
                        handleClickImage(data.id, event);
                      }}
                      style={{ border: selectedImage === data.id ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-auto flex-col ml-5">
              <div className="flex">
                <div className="like rounded text-center text-white w-28 mr-2 h-6">Yêu thích</div>
                <span className="text-2xl -mt-2">
                  DÉP KIỂU NỮ QUAI NGANG ĐẾ CAO 5CM MỀM MẠI ÊM CHÂN HOTREND - RUBISHOES
                </span>
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex ">
                  <span>5.0</span>
                  <div className="flex ml-2">
                    <svg
                      width={18}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={18}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={18}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={18}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={18}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                  </div>
                  <div className="ml-5">822 Đánh giá</div>
                  <div className="ml-5">2.5k Đã bán</div>
                </div>

                <div className="mr-20">Tố cáo</div>
              </div>
              <div className="flex flex-col mt-5 bg-text p-5">
                <div className="flex">
                  <span className="line-through mt-3 mr-2">₫79.000 - ₫129.000</span>
                  <span className="text-orange text-3xl">₫79.000</span>
                </div>
                <div className="flex mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="16"
                    viewBox="0 0 33 16"
                    className="-LmQBA mt-4 mr-4"
                    fill="none"
                  >
                    <path
                      d="M29.7085 6.72195L27.4319 3.75641C27.1376 3.37304 26.5043 3.08617 26.0241 3.11887L21.2748 3.44266C21.2599 3.44298 21.245 3.44363 21.2301 3.4446L10.4539 4.18056L8.33573 4.32497C8.33282 4.3253 8.3299 4.32562 8.32731 4.32562L4.44448 4.5908C3.96431 4.62188 3.5353 5.04248 3.49126 5.52557L1.90407 12.9937C1.86003 13.4768 2.21684 13.8465 2.69702 13.8158L20.3893 12.6725C20.4453 12.6689 20.5036 12.6611 20.5635 12.6498L25.2159 12.3497C25.6961 12.317 26.3456 11.989 26.6594 11.6211L29.6722 8.08833C29.9866 7.72018 30.0028 7.10532 29.7085 6.72195ZM27.7758 7.63794C27.61 7.90442 27.2911 8.00544 27.0638 7.86394C26.8365 7.72245 26.7866 7.39187 26.9524 7.12539C27.1182 6.85892 27.4371 6.75789 27.6644 6.89939C27.892 7.04088 27.9416 7.37179 27.7758 7.63794Z"
                      fill="#D0011B"
                    ></path>
                    <path
                      d="M3.80273 9.13674C3.80273 9.13674 4.21653 7.98892 6.5711 6.29487C8.92567 4.60083 9.80281 4.54352 9.80281 4.54352L8.65272 8.63487L3.80273 9.13674Z"
                      fill="#93001C"
                    ></path>
                    <path
                      d="M28.4963 6.69147L26.4192 4.10605C26.1508 3.7719 25.5728 3.52194 25.1347 3.55043L20.8018 3.83277C20.7882 3.8331 20.7746 3.83374 20.761 3.83439L11.8246 4.41753C11.8249 4.41753 11.8249 4.41753 11.8252 4.41753L10.9232 4.4703L9.80285 4.54316C9.40039 4.56971 9.06203 4.85528 8.96846 5.24771L8.30438 8.03518C8.29823 8.06043 8.33028 8.03421 8.30438 8.03518L4.86254 8.36576C4.33056 8.3826 3.87759 8.75787 3.762 9.27722L3.6872 9.61298L3.6354 9.84611L3.58327 10.0805L3.32845 11.2598L3.12835 12.1589C3.0882 12.5801 3.4136 12.9026 3.85169 12.8754L19.9933 11.8788C20.0445 11.8756 20.0976 11.8688 20.1523 11.8591L24.3971 11.5975C24.8352 11.569 25.4277 11.2831 25.7143 10.9622L28.4632 7.88235C28.7498 7.56148 28.7647 7.02562 28.4963 6.69147ZM27.7742 7.63789C27.6084 7.90437 27.2895 8.00539 27.0622 7.8639C26.8349 7.7224 26.7851 7.39182 26.9508 7.12534C27.1166 6.85887 27.4355 6.75785 27.6628 6.89934C27.8905 7.04083 27.94 7.37174 27.7742 7.63789Z"
                      fill="#EE4D2D"
                    ></path>
                    <path
                      d="M15.5524 5.12762L17.8046 4.98095C17.904 4.97447 18.0174 4.97026 18.1446 4.96832C18.1692 4.96767 18.1948 4.96735 18.22 4.96735C18.5063 4.96735 18.7737 5.0075 19.0149 5.08715C19.2821 5.17522 19.5081 5.31477 19.6868 5.50192C19.8662 5.68939 19.9941 5.92931 20.0666 6.21489C20.1381 6.49658 20.1449 6.83364 20.0873 7.21668C20.0102 7.71531 19.8454 8.14465 19.5974 8.49272C19.3698 8.81229 19.093 9.07683 18.7744 9.28016L19.7982 11.0393L17.8393 11.1669L17.034 9.75839L16.6008 9.78656L16.3667 11.2627L14.5762 11.3793L15.5524 5.12762ZM16.8747 8.04784L17.25 8.02355C17.3264 8.0187 17.3954 8.01254 17.4608 8.0051C17.531 7.99733 17.5867 7.99215 17.6308 7.98923C17.8101 7.96592 17.9675 7.90019 18.0989 7.79399C18.2259 7.69103 18.3104 7.52039 18.3499 7.28694C18.3871 7.06547 18.3606 6.91362 18.2702 6.83623C18.1708 6.7514 18.0326 6.70834 17.859 6.70801C17.8182 6.7106 17.7642 6.71255 17.6984 6.71384C17.6301 6.71514 17.5608 6.71838 17.4922 6.72258L17.0781 6.74946L16.8747 8.04784Z"
                      fill="#FCE60C"
                    ></path>
                    <path
                      d="M18.2197 5.06451C18.4969 5.06451 18.7517 5.10272 18.9842 5.17945C19.2371 5.26299 19.4478 5.39283 19.6162 5.56897C19.7849 5.74543 19.9034 5.96852 19.972 6.23888C20.0407 6.50924 20.0468 6.83043 19.9908 7.20214C19.916 7.68782 19.758 8.09935 19.5178 8.43641C19.2775 8.77379 18.9855 9.04383 18.6423 9.24717L19.635 10.9525L17.893 11.0659L17.0878 9.6574L16.7695 9.67812L16.5166 9.69464L16.2825 11.1708L14.6905 11.2744L15.6363 5.21896L17.4812 5.09883C17.6062 5.09074 17.7169 5.08361 17.8137 5.07714C17.9105 5.07099 18.0213 5.06678 18.1462 5.06483C18.1708 5.06483 18.1954 5.06451 18.2197 5.06451ZM16.7601 8.15277L16.8537 8.14662C16.9036 8.14338 16.9644 8.1395 17.0363 8.13464C17.1079 8.13011 17.1814 8.12525 17.2565 8.12039C17.3313 8.11554 17.4031 8.10938 17.4718 8.10161C17.5404 8.09417 17.5964 8.08866 17.6405 8.08607C17.8403 8.06049 18.0135 7.98861 18.1602 7.86946C18.3068 7.75063 18.402 7.56186 18.4457 7.30284C18.4894 7.04413 18.4519 6.86378 18.3334 6.76244C18.2152 6.66142 18.0569 6.61091 17.8581 6.61091C17.8574 6.61091 17.8564 6.61091 17.8558 6.61091C17.8182 6.6135 17.7651 6.61544 17.6965 6.61674C17.6279 6.61803 17.5576 6.62127 17.4857 6.6258C17.4138 6.63033 17.3436 6.63519 17.2749 6.6394C17.2063 6.64393 17.147 6.64782 17.0969 6.65106L16.9939 6.65786L16.7601 8.15277ZM18.2197 4.87024C18.1938 4.87024 18.1676 4.87056 18.1414 4.87121C18.0122 4.87315 17.9002 4.87736 17.8011 4.88384L17.4686 4.90553L15.6236 5.02566L15.4682 5.03569L15.4443 5.18949L14.4985 11.2449L14.4609 11.4845L14.7028 11.4687L16.2948 11.365L16.4496 11.355L16.4739 11.2015L16.6837 9.87855L16.7815 9.87207L16.9787 9.85912L17.7237 11.1624L17.7839 11.2676L17.905 11.2598L19.647 11.1465L19.9601 11.1261L19.8021 10.8548L18.9032 9.31063C19.1998 9.10794 19.4588 8.85247 19.6751 8.54908C19.9322 8.18839 20.1025 7.74513 20.1819 7.2316C20.2418 6.83529 20.234 6.48528 20.1595 6.19096C20.0824 5.88887 19.9468 5.63437 19.7558 5.4346C19.5657 5.23579 19.3264 5.08782 19.0441 4.9949C18.7941 4.91233 18.5163 4.87024 18.2197 4.87024ZM17.1619 6.84144L17.2876 6.83335L17.3656 6.82817L17.4983 6.81943C17.5657 6.81489 17.6337 6.81198 17.7004 6.81068C17.7655 6.80939 17.8199 6.80745 17.8616 6.80518C18.0119 6.80583 18.1249 6.84015 18.2071 6.91009C18.289 6.98035 18.2719 7.1662 18.2541 7.27078C18.2188 7.48027 18.1459 7.63115 18.0378 7.71858C17.9199 7.81409 17.7836 7.87108 17.6214 7.89277C17.5767 7.89569 17.5207 7.90119 17.4507 7.90864C17.3863 7.91576 17.3186 7.92159 17.2438 7.92645L17.1474 7.9326L17.024 7.94069L16.9897 7.94296L17.1619 6.84144Z"
                      fill="#EE4D2D"
                    ></path>
                    <path
                      d="M20.8711 4.78119L25.2276 4.49755L24.9631 6.20779L22.4068 6.37421L22.296 7.10499L24.7779 6.95281L24.5324 8.55846L22.0594 8.71939L21.9693 9.27986L24.5065 9.11473L24.2511 10.7495L19.8945 11.0332L20.8711 4.78119ZM22.467 4.42988C22.4362 4.42988 22.4052 4.42923 22.3741 4.42794L22.2653 4.42341L22.3984 3.58027L22.4971 3.58124C22.6467 3.58124 22.7811 3.55922 22.8967 3.51584C22.9935 3.47957 23.0453 3.4119 23.0592 3.30343L23.0599 3.29955C23.0812 3.17392 23.0343 3.14672 22.9886 3.13118C22.9271 3.11046 22.8536 3.09977 22.7697 3.09977C22.717 3.09977 22.659 3.10398 22.5975 3.1124L22.4689 3.12988L22.5923 2.30779L22.6616 2.29614C22.7989 2.27283 22.9342 2.26117 23.0637 2.26117C23.1107 2.26117 23.158 2.26279 23.2039 2.2657C23.3833 2.27801 23.5407 2.32139 23.6715 2.39554C23.8081 2.47292 23.9101 2.58657 23.9749 2.73292C24.0383 2.87701 24.0532 3.06124 24.0196 3.28077C23.9859 3.49091 23.9143 3.67417 23.8062 3.82667C23.699 3.97788 23.5679 4.10027 23.4163 4.19093C23.2671 4.28029 23.0994 4.34505 22.918 4.38293C22.7697 4.41402 22.6179 4.42988 22.467 4.42988Z"
                      fill="#FCE60C"
                    ></path>
                    <path
                      d="M23.0657 2.35797C23.1107 2.35797 23.1554 2.35959 23.1994 2.3625C23.3649 2.37383 23.5067 2.41269 23.6255 2.48003C23.7441 2.54738 23.8315 2.64452 23.8878 2.77209C23.9442 2.89966 23.9565 3.06414 23.9254 3.26586C23.894 3.46143 23.8286 3.62979 23.7288 3.77032C23.6288 3.91116 23.5087 4.02352 23.3681 4.10738C23.2276 4.19156 23.0716 4.25179 22.8999 4.28773C22.7572 4.31784 22.6137 4.33273 22.469 4.33273C22.4395 4.33273 22.4101 4.33209 22.3803 4.33079L22.4832 3.67804C22.4884 3.67804 22.4939 3.67804 22.4991 3.67804C22.6613 3.67804 22.8057 3.65408 22.9326 3.60648C23.0638 3.55727 23.1386 3.46046 23.1574 3.3154C23.1823 3.17034 23.137 3.07807 23.0217 3.03856C22.9498 3.01396 22.8663 3.00198 22.7717 3.00198C22.7141 3.00198 22.6523 3.00651 22.5865 3.01557L22.6801 2.39132C22.8125 2.3693 22.9414 2.35797 23.0657 2.35797ZM25.1146 4.60245L24.8805 6.11614L22.3239 6.28257L22.1834 7.20956L24.6652 7.05738L24.4499 8.46682L21.9775 8.62774L21.8557 9.38475L24.3936 9.21962L24.1689 10.6579L20.0108 10.9286L20.9566 4.87313L25.1146 4.60245ZM23.0657 2.1637C22.931 2.1637 22.7902 2.176 22.6474 2.19996L22.5085 2.22327L22.4874 2.3625L22.3939 2.98676L22.3553 3.2432L22.6121 3.20823C22.6691 3.20046 22.7228 3.19657 22.7714 3.19657C22.8446 3.19657 22.9077 3.20531 22.9589 3.2228C22.9631 3.22442 22.9663 3.22571 22.9683 3.22668C22.9699 3.23478 22.9709 3.25291 22.9657 3.28302L22.965 3.28691L22.9644 3.29079C22.9534 3.37498 22.9181 3.40444 22.864 3.42484C22.7594 3.46402 22.6364 3.48409 22.4985 3.48409H22.4845L22.3168 3.48247L22.2906 3.64793L22.1876 4.30068L22.1536 4.51599L22.3712 4.52506C22.4033 4.52636 22.436 4.527 22.468 4.527C22.6257 4.527 22.784 4.51049 22.9391 4.47779C23.1308 4.43764 23.3086 4.369 23.4672 4.27413C23.6304 4.17634 23.7713 4.04489 23.8865 3.88267C24.0034 3.71819 24.0808 3.52068 24.1167 3.2963C24.1536 3.05702 24.1362 2.85465 24.0653 2.69341C23.9921 2.52763 23.8765 2.39876 23.7211 2.31069C23.5773 2.22942 23.4063 2.1815 23.2124 2.16855C23.1642 2.16532 23.1149 2.1637 23.0657 2.1637ZM25.3436 4.39296L25.102 4.40882L20.944 4.67951L20.7885 4.68954L20.7646 4.84334L19.8188 10.8988L19.7812 11.1384L20.0231 11.1225L24.1812 10.8518L24.3366 10.8418L24.3605 10.688L24.5852 9.24973L24.6228 9.01013L24.3809 9.026L22.0863 9.17559L22.1449 8.81198L24.4625 8.66109L24.6183 8.65105L24.6419 8.49661L24.8572 7.08717L24.8935 6.84919L24.6532 6.86408L22.4117 7.00169L22.4926 6.46712L24.8932 6.31074L25.0486 6.3007L25.0725 6.14658L25.3066 4.63288L25.3436 4.39296Z"
                      fill="#EE4D2D"
                    ></path>
                    <path
                      d="M10.2082 6.93338C10.2396 6.73587 10.304 6.54775 10.4015 6.36967C10.4989 6.19126 10.62 6.03325 10.7648 5.89532C10.9095 5.75739 11.0746 5.64568 11.2595 5.5602C11.4444 5.47472 11.6374 5.42615 11.8385 5.4145C11.9676 5.40705 12.0852 5.4132 12.1914 5.43295C12.2976 5.4527 12.3937 5.48184 12.4799 5.51973C12.566 5.55793 12.6434 5.60391 12.7124 5.65734C12.7813 5.71108 12.8432 5.76645 12.8976 5.82376L12.3944 6.43993C12.3283 6.36028 12.2399 6.29001 12.1295 6.22849C12.0191 6.1673 11.8805 6.1414 11.7141 6.15111C11.6108 6.15726 11.5147 6.18155 11.4256 6.22396C11.3366 6.2667 11.2579 6.32077 11.1889 6.3865C11.1203 6.45255 11.0636 6.52897 11.0193 6.61639C10.9749 6.70381 10.9454 6.79544 10.9312 6.89128C10.914 6.99878 10.9163 7.0943 10.938 7.17816C10.9597 7.2617 10.9963 7.33228 11.0481 7.38991C11.0999 7.44722 11.1643 7.49029 11.242 7.51911C11.3194 7.5476 11.4055 7.55925 11.5004 7.55375C11.6555 7.5476 11.7902 7.51263 11.9048 7.4482C12.0194 7.38409 12.0968 7.31609 12.137 7.24486L11.6507 7.27303L11.7449 6.66755L13.006 6.5947L12.9889 6.69928C12.9487 6.95216 12.8765 7.17492 12.7719 7.36822C12.6673 7.56152 12.5427 7.72406 12.398 7.85617C12.2532 7.98827 12.0933 8.08962 11.9181 8.1602C11.7433 8.23079 11.5668 8.27126 11.3887 8.28162L11.3758 8.28227C11.1863 8.29328 11.0134 8.2664 10.8571 8.20229C10.7007 8.13786 10.5692 8.04493 10.463 7.92287C10.3568 7.80112 10.2797 7.6551 10.2325 7.48511C10.1849 7.31447 10.1768 7.13089 10.2082 6.93338Z"
                      fill="white"
                    ></path>
                    <path
                      d="M13.896 8.10127L13.0781 8.14854L13.5104 5.36042L14.3283 5.31315L13.896 8.10127ZM13.7769 5.17651L13.4233 4.58398L13.8837 4.55743L14.1081 5.15741L13.7769 5.17651Z"
                      fill="white"
                    ></path>
                    <path
                      d="M4.09815 10.6349C4.12696 10.4484 4.18686 10.2732 4.27752 10.1094C4.36818 9.94552 4.48086 9.80176 4.61491 9.67775C4.74928 9.55374 4.90113 9.45369 5.07112 9.37793C5.2411 9.30216 5.41789 9.25877 5.60245 9.24809C5.8291 9.23514 6.01592 9.26363 6.16357 9.33454C6.31121 9.40545 6.4417 9.50485 6.55502 9.63307L6.10108 10.1903C6.07744 10.1628 6.047 10.132 6.01009 10.0983C5.97318 10.0647 5.9285 10.0352 5.87572 10.009C5.82294 9.98308 5.76175 9.96332 5.69181 9.95037C5.62187 9.9371 5.54352 9.9358 5.45674 9.94616C5.39102 9.95264 5.32237 9.97174 5.25147 10.0035C5.18023 10.0352 5.11386 10.0789 5.05201 10.134C4.99017 10.189 4.9361 10.2544 4.89012 10.3295C4.84415 10.405 4.81177 10.4904 4.79363 10.5869C4.78036 10.6669 4.78198 10.7417 4.79784 10.8107C4.81371 10.8796 4.8422 10.9408 4.883 10.9939C4.9238 11.047 4.97722 11.0894 5.04327 11.1215C5.109 11.1532 5.18574 11.1694 5.27251 11.1697C5.36738 11.1723 5.45351 11.162 5.53121 11.139C5.60892 11.116 5.67951 11.0881 5.74265 11.0554C5.80578 11.0227 5.86374 10.9858 5.91652 10.9444C5.96897 10.9029 6.01786 10.8651 6.06254 10.8311L6.3397 11.3423C6.19497 11.4854 6.02984 11.6075 5.84399 11.7079C5.65846 11.8086 5.44315 11.8659 5.19804 11.8801L5.18606 11.8808C5.00442 11.8915 4.83961 11.8665 4.69197 11.8063C4.54432 11.7461 4.42161 11.6593 4.32415 11.5463C4.22669 11.433 4.1574 11.2983 4.11628 11.1422C4.07516 10.9849 4.06901 10.8162 4.09815 10.6349Z"
                      fill="white"
                    ></path>
                    <path
                      d="M6.63197 10.8172C6.63456 10.7855 6.63844 10.7463 6.64363 10.6996C6.64881 10.653 6.65528 10.6032 6.66338 10.5497C6.67115 10.4963 6.67892 10.4432 6.68701 10.3898C6.69478 10.3364 6.70288 10.2858 6.71065 10.2379L6.86768 9.21412L7.56317 9.17397L7.40614 10.1858C7.38768 10.3085 7.37408 10.4037 7.36502 10.4717C7.35595 10.5397 7.3498 10.5909 7.34753 10.6252C7.33976 10.7498 7.3621 10.847 7.41488 10.9166C7.46766 10.9862 7.55443 11.0176 7.67585 11.0105C7.80212 11.003 7.9012 10.9613 7.97211 10.8842C8.04334 10.8075 8.0945 10.7087 8.12591 10.5879C8.13109 10.5614 8.13692 10.5293 8.14372 10.4918C8.15019 10.4545 8.15667 10.415 8.16347 10.3736C8.16994 10.3322 8.17642 10.2917 8.18322 10.2515C8.18969 10.2114 8.19552 10.1754 8.20103 10.1434L8.35806 9.12766L9.05355 9.08752L8.90429 10.0631C8.89651 10.1058 8.88842 10.155 8.88065 10.2111C8.87288 10.2671 8.86349 10.3237 8.85313 10.381C8.84277 10.4387 8.83208 10.494 8.82172 10.5475C8.81136 10.6009 8.80197 10.6462 8.7942 10.6838C8.75729 10.8366 8.70095 10.9758 8.62454 11.1018C8.54812 11.2277 8.45617 11.3369 8.34835 11.4288C8.24053 11.5211 8.11976 11.5939 7.98701 11.648C7.85393 11.7018 7.71373 11.7332 7.56609 11.7416C7.42394 11.7497 7.29346 11.7348 7.17495 11.6969C7.05645 11.659 6.95478 11.6001 6.8706 11.5204C6.78609 11.4408 6.72295 11.342 6.68054 11.2242C6.63747 11.107 6.62161 10.9713 6.63197 10.8172ZM7.57839 8.66595C7.6153 8.60054 7.65934 8.54906 7.71049 8.5115C7.76198 8.47426 7.81767 8.45386 7.87854 8.4503C7.92581 8.44771 7.96693 8.45451 8.00093 8.47103C8.03525 8.48754 8.06666 8.50632 8.0958 8.52704C8.12461 8.54776 8.15181 8.56751 8.17674 8.58565C8.20167 8.6041 8.22758 8.61382 8.2538 8.61479C8.28553 8.61576 8.31565 8.61058 8.34479 8.59957C8.3736 8.58856 8.40015 8.56913 8.42379 8.54161L8.47948 8.78801C8.44775 8.82946 8.40825 8.8654 8.36098 8.89583C8.3137 8.92627 8.25575 8.94084 8.1871 8.93954C8.13983 8.93695 8.10065 8.92659 8.07054 8.90878C8.04011 8.89065 8.01194 8.87123 7.98571 8.85018C7.95916 8.82913 7.93423 8.81035 7.91059 8.79319C7.88696 8.77603 7.85782 8.76859 7.82349 8.77053C7.78658 8.77279 7.75291 8.78575 7.7228 8.81003C7.69236 8.83431 7.66678 8.86281 7.64574 8.89583L7.57839 8.66595Z"
                      fill="white"
                    ></path>
                    <path
                      d="M9.42626 9.06616L10.0149 9.03216L10.7075 10.3318L10.9157 8.98003L11.5953 8.94086L11.1983 11.5004L10.5423 11.5383L9.90514 10.3348L9.70892 11.5865L9.0293 11.6257L9.42626 9.06616Z"
                      fill="white"
                    ></path>
                    <path
                      d="M11.6754 10.2042C11.7042 10.0229 11.7635 9.85035 11.8528 9.68651C11.9422 9.523 12.0536 9.37762 12.1863 9.25102C12.3191 9.12442 12.4706 9.02178 12.6406 8.94342C12.8106 8.86506 12.9877 8.82038 13.1719 8.8097C13.2904 8.8029 13.3986 8.8084 13.496 8.82653C13.5935 8.84467 13.6819 8.87122 13.7609 8.90618C13.8399 8.94115 13.9111 8.98357 13.9743 9.03246C14.0374 9.08168 14.0941 9.13251 14.1443 9.18496L13.6825 9.75062C13.622 9.67744 13.5407 9.61301 13.4394 9.55667C13.338 9.50033 13.2108 9.4767 13.058 9.48544C12.9631 9.49094 12.8747 9.51329 12.7931 9.55214C12.7115 9.59132 12.639 9.64086 12.5758 9.70141C12.5127 9.76195 12.4606 9.83221 12.4198 9.91251C12.379 9.99281 12.3521 10.077 12.3392 10.1647C12.3233 10.2635 12.3256 10.3512 12.3453 10.428C12.3651 10.5047 12.3987 10.5695 12.4463 10.6223C12.4939 10.675 12.5532 10.7145 12.6244 10.7408C12.6956 10.767 12.7746 10.7777 12.8614 10.7725C13.0036 10.767 13.1276 10.7346 13.2328 10.6757C13.338 10.6168 13.4093 10.5546 13.4458 10.4889L12.9994 10.5148L13.0858 9.95882L14.2437 9.89179L14.2278 9.98796C14.1912 10.2201 14.1248 10.4247 14.0287 10.6019C13.9325 10.7793 13.8182 10.9286 13.6854 11.0497C13.5524 11.1711 13.4057 11.264 13.2451 11.3288C13.0845 11.3935 12.9226 11.4308 12.7591 11.4401L12.7471 11.4408C12.5733 11.4508 12.4146 11.4262 12.2708 11.3673C12.1271 11.308 12.0066 11.2229 11.9092 11.1108C11.8117 10.9988 11.7411 10.8651 11.6974 10.709C11.654 10.5543 11.6466 10.3856 11.6754 10.2042Z"
                      fill="white"
                    ></path>
                    <path
                      d="M27.8641 7.76164C27.6388 7.76164 27.4814 7.71307 27.393 7.61626C27.3046 7.51913 27.2444 7.34396 27.46 7.0587L27.7184 7.25395C27.6537 7.33975 27.6407 7.38637 27.6381 7.40256C27.6915 7.43753 27.9907 7.49743 28.7711 7.27175C29.4371 7.0791 30.1436 6.76341 30.661 6.42732C31.0541 6.17218 31.6868 5.67582 31.509 5.21928C31.4611 5.09624 31.3759 5.01432 31.2487 4.96867C30.6795 4.76501 29.4811 5.32419 29.0673 5.55699L28.9083 5.27497C28.9245 5.26591 29.3121 5.04865 29.801 4.86247C30.4794 4.60409 31.0029 4.53739 31.3575 4.66399C31.5751 4.7417 31.7276 4.88934 31.8104 5.10207C31.9526 5.4673 31.883 6.05108 30.7436 6.75823C30.1951 7.09853 29.4688 7.41325 28.8005 7.59975C28.4146 7.70789 28.1018 7.76164 27.8641 7.76164Z"
                      fill="#EE4D2D"
                    ></path>
                  </svg>
                  <div className="flex flex-col">
                    <div className="flex">
                      <span className="text-orange">Gì cũng rẻ</span>
                      <svg width={16} viewBox="0 0 16 16" className="shopee-svg-icon icon-help-center mx-1">
                        <g fill="none" fillRule="evenodd" transform="translate(1)">
                          <circle cx="7" cy="8" r="7" stroke="currentColor"></circle>
                          <path
                            fill="currentColor"
                            d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="">
                      <span className="text-xs">Giá tốt nhất so với các sản phẩm cùng loại trên Shoppe!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-8">
                <div className="flex">
                  <span className="mr-10 text-gray-500">Bảo Hiểm</span>
                  <span className="flex mr-10">
                    Bảo hiểm Thời trang{' '}
                    <div className="bg-orange rounded-t-xl rounded-br-xl text-white text-xs p-1">Mới</div>
                  </span>
                  <a href="" className="text-blue-600">
                    Tìm hiểu thêm
                  </a>
                </div>
                <div className="flex mt-5">
                  <span className="mr-5 text-gray-500">Vận Chuyển</span>
                  <div className="flex flex-col">
                    <div className="flex">
                      <img
                        className="w-7 mr-3"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
                        alt=""
                      />
                      Miễn phí vận chuyển
                    </div>
                    <div className="flex my-3">
                      <svg
                        width={20}
                        fill="white"
                        stroke="black"
                        enableBackground="new 0 0 15 15"
                        viewBox="0 0 15 15"
                        x="0"
                        y="0"
                        className="mr-4 shopee-svg-icon icon-free-shipping-line ml-1"
                      >
                        <g>
                          <line
                            fill="white"
                            stroke="black"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            x1="8.6"
                            x2="4.2"
                            y1="9.8"
                            y2="9.8"
                          ></line>
                          <circle fill="white" stroke="black" cx="3" cy="11.2" r="2" strokeMiterlimit="10"></circle>
                          <circle fill="white" stroke="black" cx="10" cy="11.2" r="2" strokeMiterlimit="10"></circle>
                          <line
                            fill="white"
                            stroke="black"
                            strokeMiterlimit="10"
                            x1="10.5"
                            x2="14.4"
                            y1="7.3"
                            y2="7.3"
                          ></line>
                          <polyline
                            fill="white"
                            points="1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1"
                            stroke="black"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                          ></polyline>
                          <polyline
                            fill="white"
                            points="9.9 3.8 14 3.8 14.5 10.2 11.9 10.2"
                            stroke="black"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                          ></polyline>
                        </g>
                      </svg>
                      <span className="mr-6">Vận Chuyển Tới</span>
                      <span
                        className="hover:cursor-pointer"
                        onClick={() => {
                          showAddress();
                        }}
                      >
                        Chọn nơi
                      </span>
                      <select name="" id="" className="hover:cursor-pointer" disabled></select>
                      <div
                        className="flex flex-col flex-auto border address"
                        style={{
                          width: '480px',
                          display: 'none',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: '9999',
                          backgroundColor: ' white',
                        }}
                      >
                        <div className="flex justify-between flex-auto" style={{ borderBottom: '1px solid #E5E7EB' }}>
                          <span className="p-4">Địa chỉ nhận hàng</span>
                          <span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="black"
                              fillOpacity="0.65"
                              className="evduXD mt-5 mr-5 hover:cursor-pointer exit"
                              onClick={() => {
                                showAddress();
                              }}
                            >
                              <path d="M21.0001 4.14526L19.851 2.99609L11.9981 10.849L4.14526 2.99614L2.99609 4.14531L10.8489 11.9981L2.99647 19.8506L4.14564 20.9998L11.9981 13.1473L19.8506 20.9998L20.9998 19.8506L13.1473 11.9981L21.0001 4.14526Z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="flex flex-col flex-auto p-4" style={{ borderBottom: '1px solid #E5E7EB' }}>
                          <span className="text-md">Địa chỉ của tôi</span>
                          <div className="flex mt-3">
                            <div className="mr-5 mt-2">
                              <input className="w-5 h-5 hover:cursor-pointer" type="radio" name="" id="" />
                            </div>
                            <div className="" style={{}}>
                              <span className="text-lg">
                                Nguyen Van A | <span className="text-sm text-gray-500"> (+84) 0123456789</span>
                              </span>
                              <br></br>
                              <span className="text-gray-500">Quan 12 - Ho Chi Minh</span>
                              <br></br>
                              <div className="border border-orange w-24 text-center text-orange mt-2">Mặc định</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col flex-auto p-4" style={{ borderBottom: '1px solid #E5E7EB' }}>
                          <span className="text-md">Địa chỉ của tôi</span>
                          <div className="flex mt-3">
                            <div className="mr-5 mt-2">
                              <input className="w-5 h-5 hover:cursor-pointer" type="radio" name="" id="" />
                            </div>
                            <div className="">
                              <span className="text-lg">
                                Nguyen Van A | <span className="text-sm text-gray-500"> (+84) 0123456789</span>
                              </span>
                              <br></br>
                              <span className="text-gray-500">Quan 12 - Ho Chi Minh</span>
                              <br></br>
                              <div className="border border-orange w-24 text-center text-orange mt-2 ">Mặc định</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col flex-auto p-4">
                          <div className="flex">
                            <div
                              className="border border-gray-500 w-26 text-center py-1 px-3 hover:cursor-pointer"
                              onClick={() => {
                                showNewAddress();
                              }}
                            >
                              + Thêm địa chỉ
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex flex-col flex-auto border newAddress"
                        style={{
                          width: '480px',
                          display: 'none',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: '9999',
                          backgroundColor: ' white',
                        }}
                      >
                        <div className="flex justify-between flex-auto" style={{ borderBottom: '1px solid #E5E7EB' }}>
                          <span className="p-4 text-lg">Địa chỉ mới</span>
                          <span></span>
                        </div>
                        <div className="flex flex-col flex-auto p-4" style={{ borderBottom: '1px solid #E5E7EB' }}>
                          <div className="flex">
                            <input
                              className="w-52 h-9 p-2 mr-2 border"
                              type="text"
                              name=""
                              id=""
                              placeholder="Họ và tên"
                            />
                            <input
                              className="w-52 h-9 p-2 border"
                              type="text"
                              name=""
                              id=""
                              placeholder="Số điện thoại"
                            />
                          </div>
                          <div>
                            <textarea
                              name=""
                              id=""
                              cols="53"
                              rows="3"
                              className="p-2 mt-3 border"
                              placeholder="Địa chỉ cụ thể"
                            ></textarea>
                          </div>
                          <div>
                            <span>Loại địa chỉ:</span>
                            <div className="flex mt-1">
                              <div className="border py-1 px-3 mr-2 hover:cursor-pointer:">Văn phòng</div>
                              <div className="border py-1 px-3 hover:cursor-pointer">Nhà riêng</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <input className="w-5 h-5 mr-2" type="checkbox" name="" id="" />
                            <span className="">Đặt làm địa chỉ mặc định</span>
                          </div>
                        </div>
                        <div className="flex flex-col flex-auto p-4">
                          <div className="flex justify-end">
                            <div
                              className="w-32 text-center hover:cursor-pointer"
                              onClick={() => {
                                showNewAddress();
                              }}
                            >
                              <span>Trở lại</span>
                            </div>
                            <div className="bg-orange text-white rounded-sm w-26 text-center py-1 px-3 hover:cursor-pointer">
                              Hoàn thành
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <span className="ml-10 mr-5">Phí Vận Chuyển</span>
                      <div className="box-trans">
                        <select name="" id="" className="text-orange" disabled>
                          <option value="" className="">
                            ₫0
                          </option>
                        </select>
                        <div className="box bg-white border-2 border-gray-500">
                          <div className="flex flex-col p-3">
                            <div className="w-96">
                              <div className="flex justify-between">
                                <span>Nhanh</span>
                                <span>
                                  ₫0 <span className="text-orange">Miễn phí vận chuyển</span>
                                </span>
                              </div>
                              <div className="flex flex-col mt-2">
                                <span className="text-xs">Nhận hàng vào ngày 22 Tháng 9 - 23 Tháng 9</span>
                                <span className="text-sm text-orange flex">
                                  Miễn phí vận chuyển <p className="text-black ml-1">đơn tối thiểu ₫0</p>
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className="mt-3 flex justify-between ">
                                <span>Tiết kiệm</span>
                                <span>Không hỗ trợ</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-5">
                  <span className="mr-10 w-24 text-gray-500">Màu sắc</span>
                  <div className="flex flex-wrap">
                    <div
                      className="py-1 px-3 mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickModel(1, event);
                      }}
                      style={{ border: selectedDiv === 1 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      DIO đen
                    </div>
                    <div
                      className="py-1 px-3 mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickModel(2, event);
                      }}
                      style={{ border: selectedDiv === 2 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      DIO đen
                    </div>
                    <div
                      className="py-1 px-3 mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickModel(3, event);
                      }}
                      style={{ border: selectedDiv === 3 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      DIO đen
                    </div>
                    <div
                      className="py-1 px-3 mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickModel(4, event);
                      }}
                      style={{ border: selectedDiv === 4 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      DIO đen
                    </div>
                    <div
                      className="py-1 px-3 mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickModel(5, event);
                      }}
                      style={{ border: selectedDiv === 5 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      DIO đen
                    </div>
                    <div
                      className="py-1 px-3 mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickModel(6, event);
                      }}
                      style={{ border: selectedDiv === 6 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      DIO đen
                    </div>
                    <div
                      className="py-1 px-3 mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickModel(7, event);
                      }}
                      style={{ border: selectedDiv === 7 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      DIO đen
                    </div>
                    <div
                      className="py-1 px-3 mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickModel(8, event);
                      }}
                      style={{ border: selectedDiv === 8 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      DIO đen
                    </div>
                    <div
                      className="py-1 px-3 mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickModel(9, event);
                      }}
                      style={{ border: selectedDiv === 9 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      DIO đen
                    </div>
                  </div>
                </div>
                <div className="flex mt-5">
                  <span className="mr-20 text-gray-500">Size</span>
                  <div className="flex flex-wrap">
                    <div
                      className="w-20 p-1 text-center mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickSize(1, event);
                      }}
                      style={{ border: selectedSize === 1 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      36 - 37
                    </div>
                    <div
                      className="w-20 p-1 text-center mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickSize(2, event);
                      }}
                      style={{ border: selectedSize === 2 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      36
                    </div>
                    <div
                      className="w-20 p-1 text-center mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickSize(3, event);
                      }}
                      style={{ border: selectedSize === 3 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      37
                    </div>
                    <div
                      className="w-20 p-1 text-center mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickSize(4, event);
                      }}
                      style={{ border: selectedSize === 4 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      38
                    </div>
                    <div
                      className="w-20 p-1 text-center mx-1 my-1 cursor-pointer"
                      onClick={(event) => {
                        handleClickSize(5, event);
                      }}
                      style={{ border: selectedSize === 5 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      39
                    </div>
                  </div>
                </div>
                <div className="flex mt-5">
                  <span className="mr-8 w-20 text-gray-500">Số lượng</span>
                  <div className="flex flex-wrap items-stretch text-center">
                    <div
                      className="border border-black-500 w-8 text-xl hover:cursor-pointer handle mimus"
                      onClick={(event) => {
                        handleClick(event);
                      }}
                    >
                      -
                    </div>
                    <input
                      value={1}
                      type="text"
                      name=""
                      id=""
                      className="border border-black-500 w-14 text-center quantity"
                      disabled
                    />
                    <div
                      className="border border-black-500 w-8 text-xl hover:cursor-pointer handle plus"
                      onClick={(event) => {
                        handleClick(event);
                      }}
                    >
                      +
                    </div>
                    <span className="ml-3 mt-1" style={{ color: '#757C87' }}>
                      1000 sản phẩm có sẵn
                    </span>
                  </div>
                </div>
                <div className="mt-8 flex">
                  <div
                    className="flex justify-center p-3 w-56 rounded-sm cursor-pointer"
                    style={{ border: '1px solid #F05D40', background: '#FFEEE8' }}
                  >
                    <svg
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon tDviDD icon-add-to-cart mr-2"
                      width={20}
                      stroke="#F05D40"
                    >
                      <g>
                        <g>
                          <polyline
                            fill="none"
                            points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                          ></polyline>
                          <circle cx="6" cy="13.5" r="1" stroke="#F05D40"></circle>
                          <circle cx="11.5" cy="13.5" r="1" stroke="#F05D40"></circle>
                        </g>
                        <line
                          fill="none"
                          stroke="#F05D40"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          x1="7.5"
                          x2="10.5"
                          y1="7"
                          y2="7"
                        ></line>
                        <line
                          fill="white"
                          stroke="#F05D40"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          x1="9"
                          x2="9"
                          y1="8.5"
                          y2="5.5"
                        ></line>
                      </g>
                    </svg>
                    <span style={{ color: '#F05D40' }}>Thêm vào giỏ hàng</span>
                  </div>
                  <div
                    className="flex justify-center p-3 w-56 ml-5 rounded-sm cursor-pointer"
                    style={{ border: '1px solid #F05D40', background: '#EE4D2D' }}
                  >
                    <span style={{ color: 'white' }}>Mua ngay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-auto justify-center">
          <div className="mt-2 border bg-white flex justify-between p-4" style={{ width: '1155px', height: '132px' }}>
            <div className="relative">
              <img
                className="w-20"
                src="https://down-vn.img.susercontent.com/file/6522c06ff4f83698787347435e23af4f_tn"
                alt=""
              />
              <div className="absolute bottom-4 left-2 text-white text-sm bg-orange px-1 rounded-sm">Yêu thích</div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg">Lù Store - Shoes and Clothes</span>
              <span className="text-sm">Online 14 Phút Trước</span>
              <div className="flex mt-3">
                <div
                  className="flex p-1 px-3 rounded-sm"
                  style={{ border: '1px solid #EE4D2D', background: '#FFEEE8' }}
                >
                  <svg viewBox="0 0 16 16" width={15} fill="#EE4D2D" className="shopee-svg-icon JWAQyX">
                    <g fillRule="evenodd">
                      <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z"></path>
                    </g>
                  </svg>
                  <span className="ml-2" style={{ color: '#EE4D2D' }}>
                    Chat ngay
                  </span>
                </div>
                <div
                  className="flex p-1 px-3 ml-2 rounded-sm"
                  style={{ border: '1px solid #E8E8E8', background: 'white' }}
                >
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x="0"
                    y="0"
                    strokeWidth="0"
                    className="shopee-svg-icon _9Sz-n3"
                    width={15}
                    fill="#605555"
                  >
                    <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"></path>
                  </svg>
                  <span className="ml-2" style={{ color: '#605555' }}>
                    Xem shop
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-3 p-2" style={{ width: '150px', borderLeft: '1px solid gray' }}>
              <div className="flex justify-between">
                <span style={{ color: '#999999' }}>Đánh giá</span>
                <span style={{ color: '#EE4D2D' }}>89,4k</span>
              </div>
              <div className="flex justify-between mt-3">
                <span style={{ color: '#999999' }}>Sản Phẩm</span>
                <span style={{ color: '#EE4D2D' }}>88</span>
              </div>
            </div>
            <div className="flex flex-col mt-3 p-2" style={{ width: '270px' }}>
              <div className="flex justify-between">
                <span style={{ color: '#999999' }}>Tỉ Lệ Phản Hồi</span>
                <span style={{ color: '#EE4D2D' }}>98%</span>
              </div>
              <div className="flex justify-between mt-3">
                <span style={{ color: '#999999' }}>Thời Gian Phản Hồi</span>
                <span style={{ color: '#EE4D2D' }}>trong vài giờ</span>
              </div>
            </div>
            <div className="flex flex-col mt-3 p-2" style={{ width: '230px' }}>
              <div className="flex justify-between">
                <span style={{ color: '#999999' }}>Tham Gia</span>
                <span style={{ color: '#EE4D2D' }}>30 tháng trước</span>
              </div>
              <div className="flex justify-between mt-3">
                <span style={{ color: '#999999' }}>Người Theo Dõi</span>
                <span style={{ color: '#EE4D2D' }}>214k</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="flex flex-col bg-white" style={{ width: '1155px' }}>
            <div className="p-7">
              <div className="p-3 text-xl" style={{ background: '#FAFAFA' }}>
                CHI TIẾT SẢN PHẨM
              </div>
              <div className="grid grid-cols-2 p-3">
                <div className="">
                  <div className="py-1" style={{ color: '#999999' }}>
                    Danh Mục
                  </div>
                  <div className="py-1" style={{ color: '#999999' }}>
                    Xuất xứ
                  </div>
                  <div className="py-1" style={{ color: '#999999' }}>
                    Chất liệu
                  </div>
                  <div className="py-1" style={{ color: '#999999' }}>
                    Kho hàng
                  </div>
                  <div className="py-1" style={{ color: '#999999' }}>
                    Gửi từ
                  </div>
                </div>
                <div>
                  <div className="-ml-96 py-1">Shopee - Men Shoes - Sandals & Flip Flops - Flip Flops</div>
                  <div className="-ml-96 py-1">Trung Quốc</div>
                  <div className="-ml-96 py-1">EVA</div>
                  <div className="-ml-96 py-1">145150</div>
                  <div className="-ml-96 py-1">Hà Nội</div>
                </div>
              </div>

              <div className="p-3 text-xl" style={{ background: '#FAFAFA' }}>
                MÔ TẢ SẢN PHẨM
              </div>
              <div className="grid grid-cols-2 p-3">
                <div className="flex flex-col text-sm">
                  <span>GIỚI THIỆU SẢN PHẨM</span>
                  <span>- Dép thời trang nam nữ chất liệu EVA</span>
                  <span>- Dép nữ, nam hàng loại 1 chuẩn ( cam kết không chuẩn hoàn tiền)</span>
                  <span>- Dép quai lồi nam đầy đủ size từ 36 đến 43</span>
                  <span>- Hàng chất lượng không bán hàng rẻ kém chất lượng</span>
                  <span>CAM KẾT </span>
                  <span>- 100% ảnh sản phẩm do Shop tự chụp và đính Logo. </span>
                  <span>- Cam kết đổi trả nếu lỗi từ nhà sản xuất </span>
                  <span>- Kiểu dáng ôm chân, thon gọn, thoải mái di chuyển mà không lo đau chân </span>
                  <span>
                    - Giao hàng tại nhà, Thanh toán tại nhà, nhanh chóng, tiện dụng CHAT TRỰC TIẾP VỚI NHÂN VIÊN{' '}
                  </span>
                  <span>- Gửi khách xem mẫu giày hiện có </span>
                  <span>
                    - Tư vấn các mẫu giày phù hợp với khách hàng Chúng tôi mong muốn bạn hạnh phúc khi mua hàng!{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-3">
          <div className="flex flex-col bg-white" style={{ width: '1155px' }}>
            <div className="p-7">
              <div className="p-3 text-xl" style={{ background: '#FAFAFA' }}>
                ĐÁNH GIÁ SẢN PHẨM
              </div>
              <div className="flex mt-5" style={{ background: '#FFFBF8', border: '1px solid #FFAB80' }}>
                <div className="p-8">
                  <div className="text-orange text-2xl">
                    <span className="text-3xl ">5.0</span> trên 5
                  </div>
                  <div className="flex mt-3">
                    <svg
                      width={18}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={18}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={18}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={18}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={18}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-wrap mt-6">
                    <div
                      className="p-1 px-4 mx-1 my-1 border border-orange bg-white hover:cursor-pointer"
                      onClick={(event) => {
                        handleClickComment(1, event);
                      }}
                      style={{ border: selectedComment === 1 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      Tất cả
                    </div>
                    <div
                      className="p-1 px-4 mx-1 my-1 border border-orange bg-white hover:cursor-pointer"
                      onClick={(event) => {
                        handleClickComment(2, event);
                      }}
                      style={{ border: selectedComment === 2 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      5 sao (1,3k)
                    </div>
                    <div
                      className="p-1 px-4 mx-1 my-1 border border-orange bg-white hover:cursor-pointer"
                      onClick={(event) => {
                        handleClickComment(3, event);
                      }}
                      style={{ border: selectedComment === 3 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      4 sao (135)
                    </div>
                    <div
                      className="p-1 px-4 mx-1 my-1 border border-orange bg-white hover:cursor-pointer"
                      onClick={(event) => {
                        handleClickComment(4, event);
                      }}
                      style={{ border: selectedComment === 4 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      3 sao (23)
                    </div>
                    <div
                      className="p-1 px-4 mx-1 my-1 border border-orange bg-white hover:cursor-pointer"
                      onClick={(event) => {
                        handleClickComment(5, event);
                      }}
                      style={{ border: selectedComment === 5 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      2 sao (21)
                    </div>
                    <div
                      className="p-1 px-4 mx-1 my-1 border border-orange bg-white hover:cursor-pointer"
                      onClick={(event) => {
                        handleClickComment(6, event);
                      }}
                      style={{ border: selectedComment === 6 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      1 sao (35)
                    </div>
                    <div
                      className="p-1 px-4 mx-1 my-1 border border-orange bg-white hover:cursor-pointer"
                      onClick={(event) => {
                        handleClickComment(7, event);
                      }}
                      style={{ border: selectedComment === 7 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      1 sao (35)
                    </div>
                  </div>
                  <div className="flex">
                    <div
                      className="p-1 px-4 mx-1 my-1 border border-orange bg-white hover:cursor-pointer"
                      onClick={(event) => {
                        handleClickComment(8, event);
                      }}
                      style={{ border: selectedComment === 8 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      Có bình luận (650)
                    </div>
                    <div
                      className="p-1 px-4 mx-1 my-1 border border-orange bg-white hover:cursor-pointer"
                      onClick={(event) => {
                        handleClickComment(9, event);
                      }}
                      style={{ border: selectedComment === 9 ? '1px solid #EE4D2D' : '1px solid #EEE6E6' }}
                    >
                      Có hình ảnh / Video (218)
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-auto my-3" style={{ borderBottom: '1px solid #CCCCCC' }}>
                <div className="p-3">
                  <img
                    className="rounded-full w-10"
                    src="https://down-bs-vn.img.susercontent.com/vn-11134233-7r98o-lknfmy77iydsce_tn.webp"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <span className="text-sm">Username</span>
                  <div className="flex flex-auto my-1">
                    <svg
                      width={15}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={15}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={15}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={15}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={15}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                  </div>
                  <div className="flex-auto text-xs">
                    <span>2023-08-16 10:14</span> |{' '}
                    <span>
                      Phân loại hàng:{' '}
                      <span>
                        DIO Kem,<span>37</span>
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col flex-auto text-sm">
                    <span className="mt-1">Đúng với mô tả: quá xuất sắc</span>
                    <span className="mt-1 mb-4">Chất liệu: đúng vs mô tả</span>
                    <div className="flex flex-auto">
                      <div
                        className="bg-cover bg-no-repeat bg-center  w-16 h-16 mr-2 cursor-zoom-in"
                        onClick={(event) => {
                          handleClickCommentImage(6, event);
                        }}
                        style={{
                          backgroundImage:
                            'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06v9q5k49.webp)',
                          border: selectedCommentImage === 6 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
                        }}
                      ></div>
                      <div
                        className="bg-cover bg-no-repeat bg-center w-16 h-16 mr-2 cursor-zoom-in"
                        onClick={(event) => {
                          handleClickCommentImage(7, event);
                        }}
                        style={{
                          backgroundImage:
                            'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vb4q064.webp)',
                          border: selectedCommentImage === 7 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
                        }}
                      ></div>
                      <div
                        className="bg-cover bg-no-repeat bg-center w-16 h-16 mr-2 cursor-zoom-in"
                        onClick={(event) => {
                          handleClickCommentImage(8, event);
                        }}
                        style={{
                          backgroundImage:
                            'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vcjagf5.webp)',
                          border: selectedCommentImage === 8 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
                        }}
                      ></div>
                      <div
                        className="bg-cover bg-no-repeat bg-center w-16 h-16 mr-2 cursor-zoom-in"
                        onClick={(event) => {
                          handleClickCommentImage(9, event);
                        }}
                        style={{
                          backgroundImage:
                            'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vdxuw12.webp)',
                          border: selectedCommentImage === 9 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
                        }}
                      ></div>
                      <div
                        className="bg-cover bg-no-repeat bg-center w-16 h-16  cursor-zoom-in"
                        onClick={(event) => {
                          handleClickCommentImage(10, event);
                        }}
                        style={{
                          backgroundImage:
                            'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vfcfcc8.webp)',
                          border: selectedCommentImage === 10 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
                        }}
                      ></div>
                    </div>
                    <img
                      className="w-52 mt-2 hidden imga"
                      src="https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vfcfcc8.webp"
                      alt=""
                    />
                  </div>
                  <div className="flex my-5">
                    <svg
                      width="14px"
                      height="13px"
                      viewBox="0 0 14 13"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CCCCCC"
                      className="mt-1 mr-1"
                    >
                      <defs></defs>
                      <g stroke="none" strokeWidth="1" fillRule="evenodd">
                        <g
                          id="Product-Ratings-Working"
                          transform="translate(-245.000000, -855.000000)"
                          fillRule="nonzero"
                        >
                          <g transform="translate(155.000000, 92.000000)">
                            <g transform="translate(40.000000, 184.000000)">
                              <g transform="translate(0.000000, 326.000000)">
                                <g transform="translate(50.000000, 253.000000)">
                                  <g>
                                    <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className="text-sm">11</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-auto my-3" style={{ borderBottom: '1px solid #CCCCCC' }}>
                <div className="p-3">
                  <img
                    className="rounded-full w-10"
                    src="https://down-bs-vn.img.susercontent.com/vn-11134233-7r98o-lknfmy77iydsce_tn.webp"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <span className="text-sm">Username</span>
                  <div className="flex flex-auto my-1">
                    <svg
                      width={15}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={15}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={15}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={15}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                    <svg
                      width={15}
                      fill="#EE4D2D"
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                  </div>
                  <div className="flex-auto text-xs">
                    <span>2023-08-16 10:14</span> |{' '}
                    <span>
                      Phân loại hàng:{' '}
                      <span>
                        DIO Kem,<span>37</span>
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col flex-auto text-sm">
                    <span className="mt-1">Đúng với mô tả: quá xuất sắc</span>
                    <span className="mt-1 mb-4">Chất liệu: đúng vs mô tả</span>
                    <div className="flex flex-auto">
                      <div
                        className="bg-cover bg-no-repeat bg-center  w-16 h-16 mr-2 hover:cursor-zoom-in"
                        onClick={(event) => {
                          handleClickCommentImage(1, event);
                        }}
                        style={{
                          backgroundImage:
                            'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06v9q5k49.webp)',
                          border: selectedCommentImage === 1 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
                        }}
                      ></div>
                      <div
                        className="bg-cover bg-no-repeat bg-center w-16 h-16 mr-2 hover:cursor-zoom-in"
                        onClick={(event) => {
                          handleClickCommentImage(2, event);
                        }}
                        style={{
                          backgroundImage:
                            'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vb4q064.webp)',
                          border: selectedCommentImage === 2 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
                        }}
                      ></div>
                      <div
                        className="bg-cover bg-no-repeat bg-center w-16 h-16 mr-2 hover:cursor-zoom-in"
                        onClick={(event) => {
                          handleClickCommentImage(3, event);
                        }}
                        style={{
                          backgroundImage:
                            'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vcjagf5.webp)',
                          border: selectedCommentImage === 3 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
                        }}
                      ></div>
                      <div
                        className="bg-cover bg-no-repeat bg-center w-16 h-16 mr-2 hover:cursor-zoom-in"
                        onClick={(event) => {
                          handleClickCommentImage(4, event);
                        }}
                        style={{
                          backgroundImage:
                            'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vdxuw12.webp)',
                          border: selectedCommentImage === 4 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
                        }}
                      ></div>
                      <div
                        className="bg-cover bg-no-repeat bg-center w-16 h-16 hover:cursor-zoom-in"
                        onClick={(event) => {
                          handleClickCommentImage(5, event);
                        }}
                        style={{
                          backgroundImage:
                            'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vfcfcc8.webp)',
                          border: selectedCommentImage === 5 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex my-5">
                    <svg
                      width="14px"
                      height="13px"
                      viewBox="0 0 14 13"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CCCCCC"
                      className="mt-1 mr-1"
                    >
                      <defs></defs>
                      <g stroke="none" strokeWidth="1" fillRule="evenodd">
                        <g
                          id="Product-Ratings-Working"
                          transform="translate(-245.000000, -855.000000)"
                          fillRule="nonzero"
                        >
                          <g transform="translate(155.000000, 92.000000)">
                            <g transform="translate(40.000000, 184.000000)">
                              <g transform="translate(0.000000, 326.000000)">
                                <g transform="translate(50.000000, 253.000000)">
                                  <g>
                                    <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className="text-sm">11</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
