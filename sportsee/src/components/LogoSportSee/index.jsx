import PropTypes from "prop-types";

/**
 * component display the logo of website
 * @param width
 * @param height
 * @param fillBackground
 * @param fillHead
 * @param fillBody
 * @returns {JSX.Element}
 */
export const LogoSportSee = ({
  width,
  height,
  fillBackground,
  fillHead,
  fillBody,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.5982 57.7027C44.3925 57.7027 57.1963 44.7855 57.1963 28.8514C57.1963 12.9172 44.3925 0 28.5982 0C12.8038 0 0 12.9172 0 28.8514C0 44.7855 12.8038 57.7027 28.5982 57.7027Z"
        fill={fillBackground}
      />
      <path
        d="M40.9174 16.423C43.5556 16.423 45.6942 14.2654 45.6942 11.6039C45.6942 8.94239 43.5556 6.78479 40.9174 6.78479C38.2792 6.78479 36.1406 8.94239 36.1406 11.6039C36.1406 14.2654 38.2792 16.423 40.9174 16.423Z"
        fill={fillHead}
      />
      <g mask="url(#mask0_44_12)">
        <path
          d="M39.5346 29.422C39.8489 29.9293 40.4146 30.2463 41.0431 30.2463C41.3574 30.2463 41.6716 30.1829 41.9859 29.9927L50.5968 24.7931C51.4767 24.2858 51.7281 23.1445 51.2253 22.3201C50.7225 21.4324 49.5911 21.1788 48.774 21.686L41.6088 25.9979L38.1519 19.2131C37.2091 18.2619 36.1406 17.3108 35.0721 16.4865L24.827 11.2869C24.1356 10.9698 23.3814 11.0332 22.8157 11.5405L14.2677 19.3399C13.5134 20.0374 13.4506 21.1788 14.142 21.8763C14.8334 22.6372 15.9647 22.7006 16.6561 22.0031L24.387 15.028L29.7295 17.7546L20.553 32.0852L-0.377096 57.0686C-1.19419 58.0197 -1.13133 59.5415 -0.125684 60.3659C0.817112 61.1902 2.32559 61.1268 3.14268 60.1122L23.4442 36.4605L32.1808 38.4896L26.2098 47.9376C25.5812 49.079 25.9584 50.474 27.0897 51.1081C28.0954 51.6788 29.4153 51.4251 30.1067 50.4106L37.7747 38.1725C38.2147 37.5384 38.2776 36.7141 38.0261 36.0166C37.7119 35.3191 37.1462 34.8118 36.392 34.685L29.6667 33.0998L35.7634 23.4615L39.5346 29.422Z"
          fill={fillBody}
        />
      </g>
    </svg>
  );
};

LogoSportSee.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fillBackground: PropTypes.string.isRequired,
  fillHead: PropTypes.string.isRequired,
  fillBody: PropTypes.string.isRequired,
};
