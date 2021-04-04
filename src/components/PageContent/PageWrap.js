import PropTypes from 'prop-types';
import './PageWrap.scss';

export const PageWrap = (props) => ((
  <div className="page-wrap">
    {props.children}
  </div>
));

PageWrap.propTypes = {
  children: PropTypes.node.isRequired,
};