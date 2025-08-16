import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/158854cdf83ddf72787e30f572f88ebe~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=56d497a5&x-expires=1755482400&x-signature=seJDl%2FdAjnefGysxeF6QePJuBR0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>maitrithuc2020</span>
                    <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>Mai Trí Thức</p>
            </div>
        </div>
    );
}

export default AccountItem;
