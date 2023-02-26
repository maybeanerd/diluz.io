import { profiles } from '~/scripts/profiles';
import {
  findAtLeastOneByText,
  runTestForAllViewports,
} from '~/cypress/support/util';
import { capitalizeFirstLetter } from '~/scripts/helpers/stringManipulation';

describe('Profiles', () => {
  describe('Navbar', () => {
    it('should be openable and link to all users', () => {
      const firstName = profiles
        .at(Math.floor(Math.random() * profiles.length))!
        .person.name.first.toLowerCase();

      runTestForAllViewports(() => {
        cy.visit(`/${firstName}`);

        cy.findByText('Home').should('be.hidden');

        cy.findByTestId('navbar-hamburger').click();

        cy.findByText('Home').should('be.visible');

        cy.findByText('Home').click();

        cy.url().should('contain', '/');

        cy.findByText('Check out the diluz.ios:');

        profiles.forEach((profileInNavbar) => {
          cy.visit(`/${firstName}`);

          cy.findByText(profileInNavbar.person.name.first).should('be.hidden');
          cy.findByTestId('navbar-hamburger').click();

          const firstNameInNavbar = profileInNavbar.person.name.first;

          cy.findByText(firstNameInNavbar).should('be.visible');

          cy.findByText(firstNameInNavbar).click();

          cy.url().should('contain', `/${firstNameInNavbar.toLowerCase()}`);

          if (firstNameInNavbar.toLowerCase() === firstName) {
            cy.findByText('Home').should('be.visible');
          } else {
            cy.findByText('Home').should('be.hidden');
          }
        });
      });
    });
  });

  profiles.forEach((profile) => {
    const firstName = profile.person.name.first.toLowerCase();

    describe(`Profile: ${firstName}`, () => {
      it('should have the navbar and show the current profile as active', () => {
        runTestForAllViewports(() => {
          profiles.forEach((profileInNavbar) => {
            cy.visit(`/${firstName}`);

            cy.findByText(profileInNavbar.person.name.first).should(
              'be.hidden',
            );
            cy.findByTestId('navbar-hamburger').click();

            const firstNameInNavbar = profileInNavbar.person.name.first;

            cy.findByText(firstNameInNavbar).should('be.visible');

            if (firstNameInNavbar.toLowerCase() === firstName) {
              cy.findByText(firstNameInNavbar)
                .parent()
                .parent()
                .should('have.class', 'v-list-item--active');
              return;
            }
            cy.findByText(firstNameInNavbar)
              .parent()
              .parent()
              .should('not.have.class', 'v-list-item--active');
          });
        });
      });

      it('should have the footer', () => {
        runTestForAllViewports(() => {
          cy.visit(`/${firstName}`);

          cy.findByText('made with');

          cy.findByText('© Sebastian Di Luzio');
        });
      });

      it('should have the details about person', () => {
        runTestForAllViewports(() => {
          cy.visit(`/${firstName}`);

          const { person } = profile;

          findAtLeastOneByText(
            `${person.name.first} ${profile.person.name.last}`,
          );

          if (person.shortText) {
            cy.findByText(person.shortText);
          }

          if (person.image) {
            cy.findByTestId('profile-picture');
          }

          Object.keys(person.services).forEach((service) => {
            cy.findByText(capitalizeFirstLetter(service));
          });
        });
      });

      it('should have the projects and jobs', () => {
        runTestForAllViewports(() => {
          cy.visit(`/${firstName}`);

          cy.findByText('Projects and Jobs');

          profile.projects.list.forEach((project) => {
            if (project.showInProfile) {
              findAtLeastOneByText(project.title);
              cy.findByText(project.description);

              if (project.url) {
                findAtLeastOneByText(project.url);
              }
            }
          });

          const finalProject = profile.projects.final;
          if (finalProject) {
            findAtLeastOneByText(finalProject.title);
            cy.findByText(finalProject.text);
          }
        });
      });

      it('should have the skills and education', () => {
        runTestForAllViewports(() => {
          cy.visit(`/${firstName}`);

          const { skills } = profile;

          const technicalSkills = skills.technical;
          if (technicalSkills) {
            cy.findByText('Technical Skills');
            technicalSkills.forEach((skill) => {
              findAtLeastOneByText(skill.title);
            });
          }

          const { education } = skills;
          if (education) {
            cy.findByText('Education');
            education.forEach((educationItem) => {
              cy.findByText(educationItem.title);
            });
          }

          const miscSkills = skills.misc;
          if (miscSkills) {
            cy.findByText('Misc. Skills');
            miscSkills.forEach((skill) => {
              cy.findByText(skill.title);
            });
          }
        });
      });
    });
  });
});

export {};
