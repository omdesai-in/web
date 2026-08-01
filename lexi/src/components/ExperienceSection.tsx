import type { EmailContentBlock, ExperienceSectionContent } from "../content/portfolio-content";
import {
  khaitanArtifactStatus,
  khaitanDisclosure,
  khaitanEmails,
  khaitanFounderUpdate,
  khaitanProspectResearch,
} from "../content/portfolio-content";
import VideoPoster from "./VideoPoster";
import ArtifactGallery, { type EvidenceExtra } from "./ArtifactGallery";

type ExperienceSectionProps = {
  experience: ExperienceSectionContent;
  onOpenVideo: (videoKey: string, trigger: HTMLElement | null) => void;
};

function EmailBody({ blocks }: { blocks: EmailContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.kind === "paragraph") {
          return <p key={index}>{block.text}</p>;
        }

        if (block.kind === "orderedList") {
          return (
            <ol key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        }

        if (block.kind === "unorderedList") {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <div key={index}>
            <p>Best,</p>
            <p>
              Om Desai
              <br />
              Founder’s Associate candidate, Lexi commercial exercise
              <br />
              myperom@gmail.com
            </p>
          </div>
        );
      })}
    </>
  );
}

function buildLexiExtras(): (EvidenceExtra | null)[] {
  return [
    null,
    {
      triggerLabel: "communication copy",
      panelTitle: "Customer communication",
      content: (
        <>
          <p className="panel__disclosure">{khaitanDisclosure}</p>

          <div className="panel__block">
            <span className="panel__block-label">Artifact status</span>
            <dl className="panel__meta">
              <dt>Company</dt>
              <dd>{khaitanArtifactStatus.company}</dd>
              <dt>Hypothetical prospect</dt>
              <dd>{khaitanArtifactStatus.hypotheticalProspect}</dd>
              <dt>Role context</dt>
              <dd>{khaitanArtifactStatus.roleContext}</dd>
              <dt>Exercise purpose</dt>
              <dd>{khaitanArtifactStatus.exercisePurpose}</dd>
              <dt>Information basis</dt>
              <dd>{khaitanArtifactStatus.informationBasis}</dd>
              <dt>Scenario boundary</dt>
              <dd>{khaitanArtifactStatus.scenarioBoundary}</dd>
            </dl>
          </div>

          <div className="panel__block">
            <h4 className="panel__section-heading">Prospect research</h4>

            <p className="panel__subheading">Why Khaitan &amp; Co</p>
            <p>{khaitanProspectResearch.whyKhaitan}</p>

            <p className="panel__subheading">Why Sanjay Khan Nagra</p>
            <p>{khaitanProspectResearch.whySanjay}</p>

            <p className="panel__subheading">Why the message is not generic</p>
            <p>{khaitanProspectResearch.whyNotGenericIntro}</p>
            <ol>
              {khaitanProspectResearch.whyNotGenericItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>

            <p className="panel__subheading">Research sources</p>
            <ul>
              {khaitanProspectResearch.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer noopener">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {khaitanEmails.map((email) => (
            <div className="panel__block" key={email.heading}>
              <h4 className="panel__section-heading">{email.heading}</h4>

              <p className="panel__subheading">Purpose</p>
              <p>{email.purpose}</p>

              <p className="panel__subheading">Prospect context</p>
              <p>{email.prospectContext}</p>

              <p className="panel__subheading">Subject</p>
              <p className="panel__block-subject">{email.subject}</p>

              <p className="panel__subheading">Email body</p>
              <EmailBody blocks={email.body} />

              <p className="panel__subheading">Intended next action</p>
              <p>{email.nextAction}</p>

              <p className="panel__subheading">Research rationale</p>
              <p>{email.researchRationale}</p>
            </div>
          ))}
        </>
      ),
    },
    {
      triggerLabel: "founder update",
      panelTitle: "Founder update",
      content: (
        <>
          <p className="panel__disclosure">{khaitanDisclosure}</p>

          <div className="panel__block">
            <h4 className="panel__section-heading">{khaitanFounderUpdate.title}</h4>
          </div>

          <div className="panel__block">
            <span className="panel__block-label">Status</span>
            <p>{khaitanFounderUpdate.status}</p>
          </div>

          <div className="panel__block">
            <span className="panel__block-label">Objective</span>
            <p>{khaitanFounderUpdate.objective}</p>
          </div>

          <div className="panel__block">
            <span className="panel__block-label">Work completed</span>
            <ul>
              {khaitanFounderUpdate.workCompleted.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel__block">
            <span className="panel__block-label">Evidence and observations</span>
            <p className="panel__subheading">Publicly observed</p>
            <ul>
              {khaitanFounderUpdate.publiclyObserved.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="panel__subheading">Hypothesis to validate</p>
            <p>{khaitanFounderUpdate.hypothesisToValidate}</p>
            <p>{khaitanFounderUpdate.hypothesisNote}</p>
          </div>

          <div className="panel__block">
            <span className="panel__block-label">Current status</span>
            <p>{khaitanFounderUpdate.currentStatus}</p>
          </div>

          <div className="panel__block">
            <span className="panel__block-label">Risks and limitations</span>
            <ul>
              {khaitanFounderUpdate.risksAndLimitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel__block">
            <span className="panel__block-label">Recommended experiment</span>
            <ol>
              {khaitanFounderUpdate.recommendedExperiment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="panel__block">
            <span className="panel__block-label">Measures</span>
            <ul>
              {khaitanFounderUpdate.measures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel__block">
            <span className="panel__block-label">Immediate next action</span>
            <p>{khaitanFounderUpdate.immediateNextAction}</p>
          </div>
        </>
      ),
    },
  ];
}

export default function ExperienceSection({ experience, onOpenVideo }: ExperienceSectionProps) {
  const extras = experience.id === "lexi-exercise" ? buildLexiExtras() : undefined;

  return (
    <section
      className={`experience${experience.mediaPosition === "left" ? " experience--media-left" : ""}`}
      id={experience.id}
    >
      <div className="container">
        <div className="experience__marker">
          <span className="section__dot" aria-hidden="true" />
          <span className="experience__label">{experience.label}</span>
        </div>

        <div className="experience__intro-grid">
          <div className="experience__copy">
            <h2 className="experience__headline">{experience.headline}</h2>
            <p className="experience__context">{experience.context}</p>

            {experience.referenceMetrics.length > 0 && (
              <div className="experience__reference-metrics">
                {experience.referenceMetrics.map((metric) => (
                  <span className="experience__reference-metric" key={metric}>
                    <strong>{metric}</strong>
                  </span>
                ))}
              </div>
            )}

            {experience.disclosure && <p className="experience__disclosure">{experience.disclosure}</p>}
          </div>

          <div className="experience__media">
            <VideoPoster videoKey={experience.videoKey} onOpen={onOpenVideo} />
          </div>
        </div>

        <ArtifactGallery evidence={experience.evidence} extras={extras} />
      </div>
    </section>
  );
}
