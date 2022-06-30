import { ReactComponent as IconYoga} from "../../assets/icons/iconYoga.svg";
import { ReactComponent as IconBodybuilding} from "../../assets/icons/iconBodybuilding.svg";
import { ReactComponent as IconSwimming} from "../../assets/icons/iconSwimming.svg";
import { ReactComponent as IconBike} from "../../assets/icons/iconBike.svg";

export const SportsList = (props) => {
    return <div className={'sportlist'}>
        <div className={'sportlist--item'} id={'sportlist--item--yoga'}>
            <IconYoga/>
        </div>
        <div className={'sportlist--item'} id={'sportlist--item--swimming'}>
            <IconSwimming/>
        </div>
        <div className={'sportlist--item'} id={'sportlist--item--bike'}>
            <IconBike/>
        </div>
        <div className={'sportlist--item'} id={'sportlist--item--bodybuilding'}>
            <IconBodybuilding/>
        </div>
        <p className={'sportlist--copyrights'}>Copyright, SportSee 2020</p>
    </div>
}