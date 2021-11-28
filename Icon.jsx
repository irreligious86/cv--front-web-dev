import React, { memo } from 'react';

import { ReactComponent as BurgerMenu } from 'static/icons/burger-menu.svg';
import { ReactComponent as Search } from 'static/icons/search.svg';
import { ReactComponent as Planet } from 'static/icons/planet.svg';
import { ReactComponent as Angle } from 'static/icons/angle.svg';
import { ReactComponent as Settings } from 'static/icons/settings.svg';
import { ReactComponent as SubItem } from 'static/icons/subitem.svg';
import { ReactComponent as PlusInCircle } from 'static/icons/plus-in-circle.svg';
import { ReactComponent as Attention } from 'static/icons/attention.svg';
import { ReactComponent as Asterisk } from 'static/icons/asterisk.svg';
import { ReactComponent as CrossTiny } from 'static/icons/cross-tiny.svg';
import { ReactComponent as Cross } from 'static/icons/cross.svg';
import { ReactComponent as Question } from 'static/icons/question.svg';
import { ReactComponent as GraduatedRuRU } from 'static/icons/graduated-ru-RU.svg';
import { ReactComponent as GraduatedEnUS } from 'static/icons/graduated-en-US.svg';
import { ReactComponent as NewBloodEnUS } from 'static/icons/new-blood-en-US.svg';
import { ReactComponent as NewBloodRuRU } from 'static/icons/new-blood-ru-RU.svg';
import { ReactComponent as ProEnUS } from 'static/icons/pro-en-US.svg';
import { ReactComponent as ProRuRU } from 'static/icons/pro-ru-RU.svg';
import { ReactComponent as PendingRuRU } from 'static/icons/pending-ru-RU.svg';
import { ReactComponent as PendingEnUS } from 'static/icons/pending-en-US.svg';
import { ReactComponent as SpecialistRuRU } from 'static/icons/specialist-ru-RU.svg';
import { ReactComponent as SpecialistEnUS } from 'static/icons/specialist-en-US.svg';
import { ReactComponent as PointSmallMultiple } from 'static/icons/point-small-multiple.svg';
import { ReactComponent as PointSmallSingle } from 'static/icons/point-small-single.svg';
import { ReactComponent as Points } from 'static/icons/points.svg';
import { ReactComponent as Multiple } from 'static/icons/multiple.svg';
import { ReactComponent as ArrowSmall } from 'static/icons/arrow-small.svg';
import { ReactComponent as Phone } from 'static/icons/phone.svg';
import { ReactComponent as Email } from 'static/icons/email.svg';
import { ReactComponent as Site } from 'static/icons/site.svg';
import { ReactComponent as InstagramSmall } from 'static/icons/instagram-small.svg';
import { ReactComponent as VKSmall } from 'static/icons/vk-small.svg';
import { ReactComponent as FaceBookSmall } from 'static/icons/facebook-small.svg';
import { ReactComponent as LinkedInSmall } from 'static/icons/linked-in-small.svg';
import { ReactComponent as VimeoSmall } from 'static/icons/vimeo-small.svg';
import { ReactComponent as IMDb } from 'static/icons/imdb.svg';
import { ReactComponent as Kinopoisk } from 'static/icons/kinopoisk.svg';
import { ReactComponent as Download } from 'static/icons/download.svg';
import { ReactComponent as ArrowLong } from 'static/icons/arrow-long.svg';
import { ReactComponent as Edit } from 'static/icons/edit.svg';
import { ReactComponent as DragPoints } from 'static/icons/drag-points.svg';
import { ReactComponent as CrossInCircle } from 'static/icons/cross-in-circle.svg';
import { ReactComponent as ArrowLongBig } from 'static/icons/arrow-long-big.svg';
import { ReactComponent as Tick } from 'static/icons/tick.svg';
import { ReactComponent as Form } from 'static/icons/form.svg';
import { ReactComponent as Pinterest } from 'static/icons/pinterest.svg';
import { ReactComponent as YouTube } from 'static/icons/youtube.svg';
import { ReactComponent as Behance } from 'static/icons/behance.svg';
import { ReactComponent as Flickr } from 'static/icons/flickr.svg';
import { ReactComponent as Tumblr } from 'static/icons/tumblr.svg';
import { ReactComponent as MySpace } from 'static/icons/myspace.svg';
import { ReactComponent as AngelList } from 'static/icons/angellist.svg';
import { ReactComponent as AboutMe } from 'static/icons/aboutme.svg';
import { ReactComponent as Dribbble } from 'static/icons/dribbble.svg';
import { ReactComponent as Xing } from 'static/icons/xing.svg';
import { ReactComponent as Yuoku } from 'static/icons/yuoku.svg';
import { ReactComponent as Douban } from 'static/icons/douban.svg';
import { ReactComponent as Weibo } from 'static/icons/weibo.svg';
import { ReactComponent as Participant } from 'static/icons/participant.svg';
import { ReactComponent as Winner } from 'static/icons/winner.svg';
import { ReactComponent as PositionArrows } from 'static/icons/position-arrows.svg';
import { ReactComponent as CrossSmall } from 'static/icons/cross-small.svg';
import { ReactComponent as Circle } from 'static/icons/circle.svg';
import { ReactComponent as Waves } from 'static/icons/waves.svg';
import { ReactComponent as Chat } from 'static/icons/chat.svg';
import { ReactComponent as Copy } from 'static/icons/copy.svg';

import classNames from 'classnames';

const Icon = memo(({ name, className, ...restProps }) => {
    const IconClass = classNames('Icon', className);

    switch(name) {
        case 'burger-menu':
            return <BurgerMenu className = { IconClass } { ...restProps } />
        case 'search':
            return <Search className = { IconClass } { ...restProps } />
        case 'planet':
            return <Planet className = { IconClass } { ...restProps } />
        case 'angle':
            return <Angle className = { IconClass } { ...restProps } />
        case 'settings':
            return <Settings className = { IconClass } { ...restProps } />
        case 'subitem':
            return <SubItem className = { IconClass } { ...restProps } />
        case 'plus-in-circle':
            return <PlusInCircle className = { IconClass } { ...restProps } />
        case 'attention':
            return <Attention className = { IconClass } { ...restProps } />
        case 'asterisk':
            return <Asterisk className = { IconClass } { ...restProps } />
        case 'cross-tiny':
            return <CrossTiny className = { IconClass } { ...restProps } />
        case 'cross':
            return <Cross className = { IconClass } { ...restProps } />
        case 'question':
            return <Question className = { IconClass } { ...restProps } />
        case 'graduated-ru-RU':
            return <GraduatedRuRU className = { IconClass } { ...restProps } />
        case 'graduated-en-US':
            return <GraduatedEnUS className = { IconClass } { ...restProps } />
        case 'new-blood-en-US':
            return <NewBloodEnUS className = { IconClass } { ...restProps } />
        case 'new-blood-ru-RU':
            return <NewBloodRuRU className = { IconClass } { ...restProps } />
        case 'pro-en-US':
            return <ProEnUS className = { IconClass } { ...restProps } />
        case 'pro-ru-RU':
            return <ProRuRU className = { IconClass } { ...restProps } />
        case 'pending-ru-RU':
            return <PendingRuRU className = { IconClass } { ...restProps } />
        case 'pending-en-US':
            return <PendingEnUS className = { IconClass } { ...restProps } />
        case 'specialist-ru-RU':
            return <SpecialistRuRU className = { IconClass } { ...restProps } />
        case 'specialist-en-US':
            return <SpecialistEnUS className = { IconClass } { ...restProps } />
        case 'point-small-multiple':
            return <PointSmallMultiple className = { IconClass } { ...restProps } />
        case 'point-small-single':
            return <PointSmallSingle className = { IconClass } { ...restProps } />
        case 'points':
            return <Points className = { IconClass } { ...restProps } />
        case 'multiple':
            return <Multiple className = { IconClass } { ...restProps } />
        case 'arrow-small':
            return <ArrowSmall className = { IconClass } { ...restProps } />
        case 'phone': 
            return <Phone className = { IconClass } { ...restProps } />
        case 'email':
            return <Email className = { IconClass } { ...restProps } />
        case 'site':
            return <Site className = { IconClass } { ...restProps } />
        case 'instagram-small':
            return <InstagramSmall className = { IconClass } { ...restProps } />
        case 'vk-small':
            return <VKSmall className = { IconClass } { ...restProps } />
        case 'facebook-small':
            return <FaceBookSmall className = { IconClass } { ...restProps } />
        case 'vimeo-small':
            return <VimeoSmall className = { IconClass } { ...restProps } />
        case 'linkedIn-small':
            return <LinkedInSmall className = { IconClass } { ...restProps } />
        case 'imdb':
            return <IMDb className = { IconClass } { ...restProps } />
        case 'kinopoisk':
            return <Kinopoisk className = { IconClass } { ...restProps } />
        case 'download':
            return <Download className = { IconClass } { ...restProps } />
        case 'arrow-long':
            return <ArrowLong className = { IconClass } { ...restProps } />
        case 'edit':
            return <Edit className = { IconClass } { ...restProps } />
        case 'drag-points':
            return <DragPoints className = { IconClass } { ...restProps } />
        case 'cross-in-circle':
            return <CrossInCircle className = { IconClass } { ...restProps } />
        case 'arrow-long-big': 
            return <ArrowLongBig className = { IconClass } { ...restProps } />
        case 'tick':
            return <Tick className = { IconClass } { ...restProps } />
        case 'form':
            return <Form className = { IconClass } { ...restProps } />
        case 'pinterest-small':
            return <Pinterest className = { IconClass } { ...restProps } />
        case 'youtube-small':
            return <YouTube className = { IconClass } { ...restProps } />
        case 'behance-small':
            return <Behance className = { IconClass } { ...restProps } />
        case 'flickr-small':
            return <Flickr className = { IconClass } { ...restProps } />
        case 'tumblr-small':
            return <Tumblr className = { IconClass } { ...restProps } />
        case 'myspace-small':
            return <MySpace className = { IconClass } { ...restProps } />
        case 'angellist-small':
            return <AngelList className = { IconClass } { ...restProps } />
        case 'aboutme-small':
            return <AboutMe className = { IconClass } { ...restProps } />
        case 'dribbble-small':
            return <Dribbble className = { IconClass } { ...restProps } />
        case 'xing-small':
            return <Xing className = { IconClass } { ...restProps } />
        case 'yuoku-small':
            return <Yuoku className = { IconClass } { ...restProps } />
        case 'douban-small': 
            return <Douban className = { IconClass } { ...restProps } />
        case 'weibo-small':
            return <Weibo className = { IconClass } { ...restProps } />
        case 'participant':
            return <Participant className = { IconClass } { ...restProps } />
        case 'winner':
            return <Winner className = { IconClass } { ...restProps } />
        case 'position-arrows':
            return <PositionArrows className = { IconClass } { ...restProps } />
        case 'cross-small':
            return <CrossSmall className = { IconClass } { ...restProps } />
        case 'circle':
            return <Circle className = { IconClass } { ...restProps } />
        case 'waves':
            return <Waves className = { IconClass } { ...restProps } />
        case 'chat':
            return <Chat className = { IconClass } { ...restProps } />
        case 'copy':
            return <Copy className = { IconClass } { ...restProps } />
        default:
            return null
    }
});

export { Icon };