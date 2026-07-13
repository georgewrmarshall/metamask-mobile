import { brandColor, darkTheme } from '@metamask/design-tokens';
import { AppThemeKey, Theme } from '../../../../../..//util/theme/models';

const MOCK_ELEVATED_SURFACE_COLOR = 'mock-elevated-surface-color';

let mockIsPureBlackEnabled = false;

jest.mock('../../../../../..//util/theme/themeUtils', () => ({
  get isPureBlackEnabled() {
    return mockIsPureBlackEnabled;
  },
  getElevatedSurfaceColor: jest.fn(() => MOCK_ELEVATED_SURFACE_COLOR),
}));

import styleSheet from './Tooltip.styles';

const darkThemeModel: Theme = {
  colors: darkTheme.colors,
  themeAppearance: AppThemeKey.dark,
  typography: darkTheme.typography,
  shadows: darkTheme.shadows,
  brandColors: brandColor,
};

describe('Tooltip.styles', () => {
  beforeEach(() => {
    mockIsPureBlackEnabled = false;
  });

  it('uses elevated surface color for the bottom modal container', () => {
    const styles = styleSheet({ theme: darkThemeModel });

    expect(styles.modalView.backgroundColor).toBe(
      MOCK_ELEVATED_SURFACE_COLOR,
    );
  });

  it('does not apply muted border when pure black preview is off', () => {
    const styles = styleSheet({ theme: darkThemeModel });

    expect(styles.modalView.borderWidth).toBe(0);
    expect(styles.modalView.borderColor).toBeUndefined();
  });

  it('applies muted border in pure black dark mode', () => {
    mockIsPureBlackEnabled = true;

    const styles = styleSheet({ theme: darkThemeModel });

    expect(styles.modalView.borderWidth).toBe(1);
    expect(styles.modalView.borderColor).toBe(
      darkThemeModel.colors.border.muted,
    );
  });
});
