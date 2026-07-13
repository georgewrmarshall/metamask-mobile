import { StyleSheet } from 'react-native';

import { AppThemeKey, Theme } from '../../../../../../util/theme/models';
import {
  getElevatedSurfaceColor,
  isPureBlackEnabled,
} from '../../../../../../util/theme/themeUtils';
import { fontStyles } from '../../../../../../styles/common';

const styleSheet = (params: { theme: Theme }) => {
  const { theme } = params;
  const { colors } = theme;
  const isPureBlackDark =
    isPureBlackEnabled && theme.themeAppearance === AppThemeKey.dark;


  return StyleSheet.create({
    modalView: {
      // TODO(Pure Black): Remove once MMDS ships pure-black-aware surface tokens.
      backgroundColor: getElevatedSurfaceColor(theme),
      borderWidth: isPureBlackDark ? 1 : 0,
      borderColor: isPureBlackDark ? colors.border.muted : undefined,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      ...theme.shadows.size.sm,
      elevation: 11,
      paddingVertical: 24,
    },
    closeModalBtn: {
      alignSelf: 'center',
      position: 'absolute',
      left: 0,
    },
    modalContent: {
      alignSelf: 'stretch',
      marginTop: 8,
      marginBottom: 30,
      marginHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContentValue: {
      color: theme.colors.text.default,
      ...fontStyles.normal,
    },
    iconButton: {
      marginLeft: 4,
    },
  });
};

export type TooltipStylesType = ReturnType<typeof styleSheet>;
export default styleSheet;
