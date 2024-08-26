import type { appsLinkType } from "~/types/HeaderType";
import img1 from '@/assets/images/svgs/icon-dd-lifebuoy.svg';
import img2 from '@/assets/images/svgs/icon-dd-message-box.svg';
import img3 from '@/assets/images/svgs/icon-dd-application.svg';

const isProduction = process.env.NODE_ENV === 'production';
const appsLink: appsLinkType[] = [
    {
        avatar: img1,
        title: 'App One',
        subtext: 'The number one app',
        href: isProduction ? '/app/demo-app-one' : 'http://localhost:3001'
    },
    {
        avatar: img2,
        title: 'App Two',
        subtext: 'The number two app',
        href: isProduction ? '/app/demo-app-two' : 'http://localhost:3002'
    },
    {
        avatar: img3,
        title: 'App Three',
        subtext: 'Not Available at the moment',
        href: '#'
    },
];

export default appsLink;