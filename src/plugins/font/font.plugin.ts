import { AppService } from '../../app.service';
import { PluginAbstract } from '../../plugin';

export enum FontFamily {
  Expressive = 'expressive',
  Neutral = 'neutral',
}
export type FontStyle = {
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  letterSpacing?: number;
  fontFamily: FontFamily;
};
export type FontRole = 'display' | 'headline' | 'title' | 'label' | 'body';
export type FontSize = 'large' | 'medium' | 'small';
interface FontPluginOptions {
  fontFamily?: {
    expressive?: string[];
    neutral?: string[];
  };
  fontStyles?: Partial<Record<FontRole, Record<FontSize, Partial<FontStyle>>>>;
}

export class FontPlugin extends PluginAbstract {
  private readonly fontFamily: { expressive: string[]; neutral: string[] };
  private readonly fontStyles: Record<FontRole, Record<FontSize, FontStyle>>;

  constructor(
    protected appService: AppService,
    protected options: FontPluginOptions
  ) {
    super();
    this.fontFamily = {
      expressive: options?.fontFamily?.expressive ?? ['Roboto', 'sans-serif'],
      neutral: options?.fontFamily?.neutral ?? ['Roboto', 'sans-serif'],
    };
    this.fontStyles = {
      display: {
        large: {
          fontWeight: 400,
          fontSize: 3.5625,
          lineHeight: 4,
          letterSpacing: -0.015625,
          fontFamily: FontFamily.Expressive,
        },
        medium: {
          fontWeight: 400,
          fontSize: 2.8125,
          lineHeight: 3.25,
          fontFamily: FontFamily.Expressive,
        },
        small: {
          fontWeight: 400,
          fontSize: 2.25,
          lineHeight: 2.75,
          fontFamily: FontFamily.Expressive,
        },
      },
      headline: {
        large: {
          fontWeight: 400,
          fontSize: 2,
          lineHeight: 2.5,
          fontFamily: FontFamily.Expressive,
        },
        medium: {
          fontWeight: 400,
          fontSize: 1.75,
          lineHeight: 2.25,
          fontFamily: FontFamily.Expressive,
        },
        small: {
          fontWeight: 400,
          fontSize: 1.5,
          lineHeight: 2,
          fontFamily: FontFamily.Expressive,
        },
      },
      title: {
        large: {
          fontWeight: 400,
          fontSize: 1.375,
          lineHeight: 1.75,
          fontFamily: FontFamily.Neutral,
        },
        medium: {
          fontWeight: 500,
          fontSize: 1,
          lineHeight: 1.5,
          fontFamily: FontFamily.Neutral,
          letterSpacing: 0.009375,
        },
        small: {
          fontWeight: 500,
          fontSize: 0.875,
          lineHeight: 1.25,
          fontFamily: FontFamily.Neutral,
          letterSpacing: 0.00625,
        },
      },
      label: {
        large: {
          fontWeight: 500,
          fontSize: 0.875,
          lineHeight: 1.25,
          fontFamily: FontFamily.Neutral,
          letterSpacing: 0.00625,
        },
        medium: {
          fontWeight: 500,
          fontSize: 0.75,
          lineHeight: 1,
          fontFamily: FontFamily.Neutral,
          letterSpacing: 0.03125,
        },
        small: {
          fontWeight: 500,
          fontSize: 0.6875,
          lineHeight: 1,
          fontFamily: FontFamily.Neutral,
          letterSpacing: 0.03125,
        },
      },
      body: {
        large: {
          fontWeight: 400,
          fontSize: 1,
          lineHeight: 1.5625,
          fontFamily: FontFamily.Neutral,
          letterSpacing: 0.03125,
        },
        medium: {
          fontWeight: 400,
          fontSize: 0.875,
          lineHeight: 1.25,
          fontFamily: FontFamily.Neutral,
          letterSpacing: 0.015625,
        },
        small: {
          fontWeight: 400,
          fontSize: 0.75,
          lineHeight: 1,
          fontFamily: FontFamily.Neutral,
          letterSpacing: 0.025,
        },
      },
    };
    if (options && options.fontStyles)
      Object.entries(options.fontStyles).forEach(([key, fontParam]) => {
        const fontRole: FontRole = key as FontRole;
        Object.entries(fontParam).forEach(([size, fontStyle]) => {
          const fontSize: FontSize = size as FontSize;
          if (fontStyle) {
            this.fontStyles[fontRole][fontSize] = {
              ...this.fontStyles[fontRole][fontSize],
              ...fontStyle,
            };
          }
        });
      });
  }
  static config(options: FontPluginOptions): FontPluginOptions {
    return options;
  }
  getFonts() {
    return {
      fontStyles: this.fontStyles,
      fontFamily: this.fontFamily,
    };
  }
}
