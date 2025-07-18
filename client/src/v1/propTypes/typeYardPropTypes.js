import PropTypes from "prop-types";

export const typeYardInterface = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number]),
  tenLoaiSan: PropTypes.number,
  moTa: PropTypes.string,
});
