import type { ProjectImageMap } from '@/lib/types';
import { ProjectId } from './project-ids';

import seraphStationDesktop from '/public/assets/images/portfolio/desktop/image-seraph.jpg';
import seraphStationMobile from '/public/assets/images/portfolio/mobile/image-seraph.jpg';
import seraphStationTablet from '/public/assets/images/portfolio/tablet/image-seraph.jpg';

import eeboxBuildingDesktop from '/public/assets/images/portfolio/desktop/image-eebox.jpg';
import eeboxBuildingMobile from '/public/assets/images/portfolio/mobile/image-eebox.jpg';
import eeboxBuildingTablet from '/public/assets/images/portfolio/tablet/image-eebox.jpg';

import federalIITowerDesktop from '/public/assets/images/portfolio/desktop/image-federal.jpg';
import federalIITowerMobile from '/public/assets/images/portfolio/mobile/image-federal.jpg';
import federalIITowerTablet from '/public/assets/images/portfolio/tablet/image-federal.jpg';

import projectDelSolDesktop from '/public/assets/images/portfolio/desktop/image-del-sol.jpg';
import projectDelSolTablet from '/public/assets/images/portfolio/tablet/image-del-sol.jpg';

import lePrototypeDesktop from '/public/assets/images/portfolio/desktop/image-prototype.jpg';
import lePrototypeTablet from '/public/assets/images/portfolio/tablet/image-prototype.jpg';

import tower228bDesktop from '/public/assets/images/portfolio/desktop/image-228b.jpg';
import tower228bTablet from '/public/assets/images/portfolio/tablet/image-228b.jpg';

import grandEdelweissHotelDesktop from '/public/assets/images/portfolio/desktop/image-edelweiss.jpg';
import grandEdelweissHotelMobile from '/public/assets/images/portfolio/mobile/image-edelweiss.jpg';
import grandEdelweissHotelTablet from '/public/assets/images/portfolio/tablet/image-edelweiss.jpg';

import netcryTowerDesktop from '/public/assets/images/portfolio/desktop/image-netcry.jpg';
import netcryTowerMobile from '/public/assets/images/portfolio/mobile/image-netcry.jpg';
import netcryTowerTablet from '/public/assets/images/portfolio/tablet/image-netcry.jpg';

import hypersDesktop from '/public/assets/images/portfolio/desktop/image-hypers.jpg';
import hypersMobile from '/public/assets/images/portfolio/mobile/image-hypers.jpg';
import hypersTablet from '/public/assets/images/portfolio/tablet/image-hypers.jpg';

import sxivTowerDesktop from '/public/assets/images/portfolio/desktop/image-sxiv.jpg';
import sxivTowerMobile from '/public/assets/images/portfolio/mobile/image-sxiv.jpg';
import sxivTowerTablet from '/public/assets/images/portfolio/tablet/image-sxiv.jpg';

import trinityBankTowerDesktop from '/public/assets/images/portfolio/desktop/image-trinity.jpg';
import trinityBankTowerMobile from '/public/assets/images/portfolio/mobile/image-trinity.jpg';
import trinityBankTowerTablet from '/public/assets/images/portfolio/tablet/image-trinity.jpg';

import projectParamourDesktop from '/public/assets/images/portfolio/desktop/image-paramour.jpg';
import projectParamourMobile from '/public/assets/images/portfolio/mobile/image-paramour.jpg';
import projectParamourTablet from '/public/assets/images/portfolio/tablet/image-paramour.jpg';

export const PROJECT_IMAGES: ProjectImageMap = {
  [ProjectId.SERAPH_STATION]: {
    mobile: seraphStationMobile,
    tablet: seraphStationTablet,
    desktop: seraphStationDesktop,
  },
  [ProjectId.EEBOX_BUILDING]: {
    mobile: eeboxBuildingMobile,
    tablet: eeboxBuildingTablet,
    desktop: eeboxBuildingDesktop,
  },
  [ProjectId.FEDERAL_II_TOWER]: {
    mobile: federalIITowerMobile,
    tablet: federalIITowerTablet,
    desktop: federalIITowerDesktop,
  },
  [ProjectId.PROJECT_DEL_SOL]: {
    mobile: projectDelSolTablet, // Changed for higher resolution (Featured P.)
    tablet: projectDelSolTablet,
    desktop: projectDelSolDesktop,
  },
  [ProjectId.LE_PROTOTYPE]: {
    mobile: lePrototypeTablet, // Changed for higher resolution (Featured P.)
    tablet: lePrototypeTablet,
    desktop: lePrototypeDesktop,
  },
  [ProjectId.TOWER_228B]: {
    mobile: tower228bTablet, // Changed for higher resolution (Featured P.)
    tablet: tower228bTablet,
    desktop: tower228bDesktop,
  },
  [ProjectId.GRAND_EDELWEISS_HOTEL]: {
    mobile: grandEdelweissHotelMobile,
    tablet: grandEdelweissHotelTablet,
    desktop: grandEdelweissHotelDesktop,
  },
  [ProjectId.NETCRY_TOWER]: {
    mobile: netcryTowerMobile,
    tablet: netcryTowerTablet,
    desktop: netcryTowerDesktop,
  },
  [ProjectId.HYPERS]: {
    mobile: hypersMobile,
    tablet: hypersTablet,
    desktop: hypersDesktop,
  },
  [ProjectId.SXIV_TOWER]: {
    mobile: sxivTowerMobile,
    tablet: sxivTowerTablet,
    desktop: sxivTowerDesktop,
  },
  [ProjectId.TRINITY_BANK_TOWER]: {
    mobile: trinityBankTowerMobile,
    tablet: trinityBankTowerTablet,
    desktop: trinityBankTowerDesktop,
  },
  [ProjectId.PROJECT_PARAMOUR]: {
    mobile: projectParamourMobile,
    tablet: projectParamourTablet,
    desktop: projectParamourDesktop,
  },
};
