import {} from 'vue';

const titleFallback = 'diluz.io';
const descriptionFallback = 'An open source collection of Di Luzios.';
export function getHeaders(
  path: string,
  titleInput?: string,
  descriptionInput?: string,
  image?: string | null,
) {
  const title = titleInput || titleFallback;
  const description = descriptionInput || descriptionFallback;
  // TODO add default image?

  const meta = [
    // Essential META Tags
    { hid: 'og-title', property: 'og:title', content: title },
    { hid: 'title', property: 'title', content: title },
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-url', property: 'og:url', content: path },
    {
      hid: 'twitter-card',
      property: 'twitter:card',
      content: 'summary_large_image',
    },
  ];
  if (image) {
    meta.push({ hid: 'og-image', property: 'og:image', content: image });
    meta.push({ hid: 'image', property: 'image', content: image });
  }

  // Non-Essential, But Recommended
  meta.push(
    ...[
      {
        hid: 'og-description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'description',
        property: 'description',
        content: description,
      },
      { hid: 'og-site_name', property: 'og:site_name', content: title },
      {
        hid: 'twitter-image:alt',
        property: 'twitter:image:alt',
        content: title,
      },
    ],
  );

  // Non-Essential, But Required for Analytics
  // { hid: 'fb-app_id', property: 'fb:app_id', content: 'appId' },
  // TODO add option to link twitter
  /* { hid: 'twitter-site', property: 'twitter:site',
     content: '@'+this.profile.person.services.twitter }, */

  // adjust favicon
  const link = [
    {
      hid: 'icon',
      rel: 'icon',
      type: 'image/x-ico',
      href: image || './favicon.ico',
    },
  ];
  return {
    title,
    meta,
    link,
  };
}
