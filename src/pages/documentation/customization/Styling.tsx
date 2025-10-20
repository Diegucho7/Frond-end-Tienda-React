import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import DocPagesLayout from 'layouts/DocPagesLayout';

const themeColorCode = `
    //*-----------------------------------------------
    //|   Theme Colors
    //-----------------------------------------------*/

    $primary: $blue !default; 
    $secondary: $gray-900 !default;
    $success: $green !default;
    $info: $cyan !default;
    $warning: $yellow !default;
    $danger: $red !default;
    $light: $gray-100 !default;
    $dark: $gray-1100 !default;        
`;

const bodyColorCode = `
    //*-----------------------------------------------
    //|   Body Colors
    //-----------------------------------------------*/

    $body-color: $gray-900 !default;
    $body-bg: $gray-50 !default;
    
    $body-secondary-color: $gray-800 !default;
    $body-secondary-bg: $gray-200 !default;
    
    $body-tertiary-color: $gray-700 !default;
    $body-tertiary-bg: $gray-300 !default;
    
    $body-quaternary-color: $gray-500 !default;
    $body-quaternary-bg: $gray-400 !default;
    
    $body-emphasis-color: $gray-1100 !default;
    $body-emphasis-bg: $white !default;
    
    $body-highlight-color: $gray-1000 !default;
    $body-highlight-bg: $gray-100 !default;        
`;

const darkThemeColorCode = `
    //*-----------------------------------------------
    //|   Dark theme colors
    //-----------------------------------------------*/

    $theme-colors-dark: (
        'primary': $blue-300,
        'secondary': $secondary,
        'success': $green-300,
        'info': $cyan-300,
        'warning': $orange-300,
        'danger': $red-300,
        'light': rgba(map-get($grays-dark, '200'), 0.25),
        'dark': $light
    ) !default;

`;

const themeUsedColorsCode = `
    // Theme used colors

    $theme-color-shades: (
      'primary-lighter': $blue-200,
      'primary-light': $blue-300,
      'primary-dark': $blue-600,
      'primary-darker': $blue-700,
    
      'secondary-lighter': $gray-200,
      'secondary-light': $gray-300,
      'secondary-dark': $gray-1000,
      'secondary-darker': $gray-700,
    
      'warning-lighter': $orange-200,
      'warning-light': $orange-300,
      'warning-dark': $orange-600,
      'warning-darker': $orange-700,
    
      'danger-lighter': $red-200,
      'danger-light': $red-300,
      'danger-dark': $red-600,
      'danger-darker': $red-700,
    
      'success-lighter': $green-200,
      'success-light': $green-300,
      'success-dark': $green-600,
      'success-darker': $green-700,
    
      'info-lighter': $cyan-200,
      'info-light': $cyan-300,
      'info-dark': $cyan-600,
      'info-darker': $cyan-700,
    ) !default;
    

    // Dark theme used color

    $theme-color-shades-dark: (
      'primary-lighter': $blue-700,
      'primary-light': $blue-500,
      'primary-dark': $blue-300,
      'primary-darker': $blue-300,

      'warning-lighter': $orange-700,
      'warning-light': $orange-500,
      'warning-dark': $orange-300,
      'warning-darker': $orange-300,

      'danger-lighter': $red-700,
      'danger-light': $red-500,
      'danger-dark': $red-300,
      'danger-darker': $red-300,

      'success-lighter': $green-700,
      'success-light': $green-500,
      'success-dark': $green-300,
      'success-darker': $green-300,

      'info-lighter': $cyan-700,
      'info-light': $cyan-500,
      'info-dark': $cyan-300,
      'info-darker': $cyan-300,
    ) !default;
    
`;

const usingCssVariablesCode = `
      /*-----------------------------------------------
      |   Theme Styles
      -----------------------------------------------*/
      $success: #00d27a;
      $danger: #e63757;
      :root, :root.light, :root .light {
        --phoenix-primary:  #{$success};
        --phoenix-primary-rgb: #{to-rgb($success)};
        ...
        ...
        ...
      }
      [data-bs-theme="dark"]{
        --phoenix-primary: #{$danger};
        --phoenix-primary-rgb: #{to-rgb($danger)};
        .card{
          --phoenix-card-bg: #{$success};
        }
      }
`;

const Styling = () => {
  return (
    <div>
      <DocPageHeader
        title="Styling"
        description="We recommend you customize your theme styles using the user style files. You can customize the theme’s styles with the following approaches:"
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Edit SCSS" />
          <PhoenixDocCard.Body className="text-body-secondary">
            <p>
              You can add your own SCSS and override the theme style in the{' '}
              <code>user.scss</code> file.
            </p>
            <div className="border rounded-1 bg-body-emphasis px-3 py-2 mt-4 mb-3">
              <code>user.scss</code>
            </div>
            <p>
              To make broader changes to the design of the theme, such as
              changing the color scheme or font sizes, use{' '}
              <code>src/assets/scss/_user-variables.scss</code>. Any variable
              from <code>node_modules/bootstrap/scss/_variables.scss</code> or{' '}
              <code>src/assets/scss/theme/_variables.scss</code> can be
              overridden with your own value.
            </p>

            <div className="border rounded-1 bg-body-emphasis px-3 py-2 mt-4 mb-3">
              <code>_user-variables.scss</code>
            </div>
            <p>
              To remove bootstrap components, update{' '}
              <code>src/scss/_bootstrap.scss</code> file.
            </p>
            <div className="border rounded-1 bg-body-emphasis px-3 py-2 mt-4 mb-3">
              <code>_bootstrap.scss</code>
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Changing theme colors" />
          <PhoenixDocCard.Body className="text-body-secondary">
            <p>
              You can bring your necessary variable colors form{' '}
              <code>src/scss/theme/_colors.scss </code> and{' '}
              <code>src/scss/theme/_variables-dark.scss</code>. Paste it into{' '}
              <code> src/scss/_user-variables.scss </code> then update variables
              as your necessity. We recommend to follow this approach.
            </p>
            <p>
              Light mode is default theme style in {import.meta.env.VITE_TITLE}.
              So, if you update any bootstrap’s SCSS variables, it will effect
              in Light mode. If you want to update any color, find the
              corresponding variable for the color and place theme to
              _user-variables.scss file.
            </p>
            <PhoenixLiveEditor code={themeColorCode} />

            <p className="mt-3">
              Most of the background and text colors used from body colors, to
              update the colors change the corresponding variables.
            </p>
            <PhoenixLiveEditor code={bodyColorCode} />

            <p className="mt-3">
              If you want to update any theme colors for dark mode, update{' '}
              <code>$theme-colors-dark</code> variable and to update the grays
              colors you have to update the <code>$grays-dark </code>variable.
            </p>
            <PhoenixLiveEditor code={darkThemeColorCode} />

            <h6 className="mt-4 fs-7 mb-2 fw-semibold">Theme Color Shades</h6>
            <p className="mb-1">
              All <strong>{import.meta.env.VITE_TITLE}</strong> colors are
              available as Sass variables and Sass map in{' '}
              <code>src/scss/theme/_colors.scss </code> &{' '}
              <code>src/scss/theme/_variables-dark.scss </code>file. To avoid
              increased file sizes, we don’t create text or background color
              classes for each of these variables. Instead, we choose a subset
              of these colors for a theme palette.
            </p>
            <p>
              You'll find all the colors used in the theme in a sass map name{' '}
              <code>$theme-color-shades </code>in{' '}
              <code>src/scss/theme/_colors.scss </code>file. If you want to use
              any <strong>{import.meta.env.VITE_TITLE} </strong>color to
              generate <code>text/bg </code>
              utility class, Add the color variable in{' '}
              <code>$theme-color-shades </code>map. If you want to add/change
              color for dark mode, update the{' '}
              <code>$theme-color-shades-dark </code>map.{' '}
            </p>
            <PhoenixLiveEditor code={themeUsedColorsCode} />
            <h4 className="mt-4 mb-2">Using CSS variable:</h4>
            <p>
              To update theme color with this approach, you have to update CSS
              variable for both modes. If you change any color you have to
              assign its corresponding RGB color too. Please note that sometimes
              you may need to update corresponding component's CSS variable. For
              example:
            </p>
            <PhoenixLiveEditor code={usingCssVariablesCode} />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default Styling;
