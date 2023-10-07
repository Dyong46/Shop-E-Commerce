import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Review({ review }) {
  const [selectedCommentImage, setSelectedCommentImage] = useState(null);
  // console.log(review);

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

  return (
    <div key={review.id} className="flex flex-auto my-3" style={{ borderBottom: '1px solid #CCCCCC' }}>
      <div className="p-3">
        <img className="rounded-full w-10" src={review.account_id.img} alt="" />
      </div>
      <div className="p-2">
        <span className="text-sm">{review.account_id.username}</span>
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
          <span className="mt-1">{review.comment}</span>
          <span className="mt-1 mb-4">Chất liệu: đúng vs mô tả</span>
          <div className="flex flex-auto">
            <div
              className="bg-cover bg-no-repeat bg-center  w-16 h-16 mr-2 cursor-zoom-in"
              onClick={(event) => {
                handleClickCommentImage(6, event);
              }}
              style={{
                backgroundImage: 'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06v9q5k49.webp)',
                border: selectedCommentImage === 6 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
              }}
            ></div>
            <div
              className="bg-cover bg-no-repeat bg-center w-16 h-16 mr-2 cursor-zoom-in"
              onClick={(event) => {
                handleClickCommentImage(7, event);
              }}
              style={{
                backgroundImage: 'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vb4q064.webp)',
                border: selectedCommentImage === 7 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
              }}
            ></div>
            <div
              className="bg-cover bg-no-repeat bg-center w-16 h-16 mr-2 cursor-zoom-in"
              onClick={(event) => {
                handleClickCommentImage(8, event);
              }}
              style={{
                backgroundImage: 'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vcjagf5.webp)',
                border: selectedCommentImage === 8 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
              }}
            ></div>
            <div
              className="bg-cover bg-no-repeat bg-center w-16 h-16 mr-2 cursor-zoom-in"
              onClick={(event) => {
                handleClickCommentImage(9, event);
              }}
              style={{
                backgroundImage: 'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vdxuw12.webp)',
                border: selectedCommentImage === 9 ? '2px solid #EE4D2D' : '1px solid #EEE6E6',
              }}
            ></div>
            <div
              className="bg-cover bg-no-repeat bg-center w-16 h-16  cursor-zoom-in"
              onClick={(event) => {
                handleClickCommentImage(10, event);
              }}
              style={{
                backgroundImage: 'url(https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lkhlf06vfcfcc8.webp)',
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
              <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
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
  );
}

Review.propTypes = {
  review: PropTypes.object.isRequired,
};
