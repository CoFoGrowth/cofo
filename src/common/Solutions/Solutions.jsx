import {
  StyledSolutions,
  SolutionsHeader,
  HeaderTitle,
  SolutionsGrid,
  SolutionCard,
  CardTitle,
  CardDescription,
  CardButton,
  CardImage,
  StatsCard,
  StatsValue,
  StatsTitle,
  StatsDescription,
  ConsultationCard,
  ConsultationTitle,
  ConsultationText,
  ConsultationButton,
  WebinarCard,
  WebinarTitle,
  WebinarDescription,
  WebinarButton,
  SocialMediaCard,
  SocialMediaInfo,
  SocialMediaVideo,
  AuditCard,
  IconCircle,
  IconBox,
  IconTitle,
  IconText,
} from "./StyledSolutions";

const Solutions = ({
  title,
  variant = "automation",
  stats,
  solutionItems = [],
  webinar,
  consultation,
  socialMedia,
  audit,
}) => {
  return (
    <StyledSolutions $variant={variant}>
      <SolutionsHeader>
        <HeaderTitle>{title}</HeaderTitle>
      </SolutionsHeader>

      <SolutionsGrid $variant={variant}>
        {/* Render solution cards based on provided items */}
        {solutionItems.map((item, index) => (
          <SolutionCard key={index} $variant={item.variant || "primary"}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.buttonText && (
              <CardButton href={item.buttonLink || "#"}>
                {item.buttonText}
              </CardButton>
            )}
            {item.imageSrc && (
              <CardImage src={item.imageSrc} alt={item.title} />
            )}
          </SolutionCard>
        ))}

        {/* Stats card */}
        {stats && (
          <StatsCard $variant={stats.variant || "default"}>
            {stats.variant === "time" ? (
              <>
                <IconBox>
                  <IconTitle>{stats.value}</IconTitle>
                  <IconText>{stats.title}</IconText>
                </IconBox>
                <CardDescription>{stats.description}</CardDescription>
              </>
            ) : (
              <>
                <StatsValue>{stats.value}</StatsValue>
                <StatsTitle>{stats.title}</StatsTitle>
                <StatsDescription>{stats.description}</StatsDescription>
              </>
            )}
          </StatsCard>
        )}

        {/* Webinar card */}
        {webinar && (
          <WebinarCard>
            <WebinarTitle>{webinar.title}</WebinarTitle>
            <WebinarDescription>{webinar.description}</WebinarDescription>
            <WebinarButton href={webinar.buttonLink || "#kontakt"}>
              {webinar.buttonText}
            </WebinarButton>
          </WebinarCard>
        )}

        {/* Consultation card */}
        {consultation && (
          <ConsultationCard>
            <ConsultationTitle>{consultation.title}</ConsultationTitle>
            <ConsultationText>{consultation.text}</ConsultationText>
            <ConsultationButton href={consultation.buttonLink || "#kontakt"}>
              {consultation.buttonText}
            </ConsultationButton>
          </ConsultationCard>
        )}

        {/* Social Media Card */}
        {socialMedia && (
          <SocialMediaCard>
            <SocialMediaInfo>
              <CardTitle>{socialMedia.title}</CardTitle>
              <CardDescription>{socialMedia.description}</CardDescription>
            </SocialMediaInfo>
            {socialMedia.videoSrc && (
              <SocialMediaVideo>
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  src={socialMedia.videoSrc}
                />
              </SocialMediaVideo>
            )}
          </SocialMediaCard>
        )}

        {/* Business Audit Card */}
        {audit && (
          <AuditCard>
            {audit.showIcon && (
              <IconCircle>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" />
                </svg>
              </IconCircle>
            )}
            <CardTitle>{audit.title}</CardTitle>
            <CardDescription>{audit.description}</CardDescription>
            {audit.buttonText && (
              <CardButton href={audit.buttonLink || "#kontakt"}>
                {audit.buttonText}
              </CardButton>
            )}
          </AuditCard>
        )}
      </SolutionsGrid>
    </StyledSolutions>
  );
};

export default Solutions;
