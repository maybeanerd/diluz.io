import { type Profile } from '~/server/profile.types';
import { profiles, defaultProfile } from '~/server/profiles';

const profile = ref<Profile>(defaultProfile);

function getLowQualityImageUrl (
  name: string,
  imagePath: string,
  format: 'png' | 'webp',
) {
  // This URL doesn't always exist - it only does if the image is being used in that size
  // which it currently is inside the profilePicture component
  // But it seems not really possible to generate these with the useSizes composable
  return `/_ipx/w_64&f_${format}/profile/${name}/${imagePath}`;
}

function setMetaInfo (person: Profile['person']) {
  const pageTitle = `${person.name.first} ${person.name.last}`;
  const pageDescription = person.shortText ?? `${pageTitle}s personal page.`;

  const { getImage } = useImage();

  const pageImage = person.image
    ? getImage(`/profile/${person.name.first.toLowerCase()}/${person.image}`)
      .url
    : undefined;

  useSeoMeta({
    title: pageTitle,
    ogTitle: pageTitle,
    description: pageDescription,
    ogDescription: pageDescription,
    ogImage: pageImage,
    twitterCard: 'summary_large_image',
  });

  if (person.image) {
    const name = person.name.first.toLowerCase();
    useHead({
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: getLowQualityImageUrl(name, person.image, 'png'),
        },
        {
          rel: 'icon',
          type: 'image/webp',
          href: getLowQualityImageUrl(name, person.image, 'webp'),
        },
      ],
    });
  }
}

function setProfileByName (name: string | undefined) {
  const foundProfile = name
    ? profiles.find(
      searchedProfile =>
        searchedProfile.person.name.first.toLowerCase() === name.toLowerCase(),
    )
    : undefined;

  profile.value = foundProfile ?? defaultProfile;
  setMetaInfo(profile.value.person);
}

export function useProfileFromRoute () {
  const route = useRoute();
  setProfileByName(route.params.name as string | undefined);

  return {
    profile,
  };
}
