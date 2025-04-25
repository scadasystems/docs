import classes from "@/components/settings/settings.module.css";
import { useAppVersion } from "@/features/workspace/queries/workspace-query.ts";
import { isCloud } from "@/lib/config.ts";
import { Text, Tooltip } from "@mantine/core";
import { useTranslation } from "react-i18next";
import semverGt from "semver/functions/gt";

export default function AppVersion() {
  const { t } = useTranslation();
  const { data: appVersion } = useAppVersion(!isCloud());
  let hasUpdate = false;
  try {
    hasUpdate =
      appVersion &&
      parseFloat(appVersion.latestVersion) > 0 &&
      semverGt(appVersion.latestVersion, appVersion.currentVersion);
  } catch (err) {
    console.error(err);
  }

  return (
    <div className={classes.text}>
      <Tooltip
        label={t("{{latestVersion}} is available", {
          latestVersion: `v${appVersion?.latestVersion}`,
        })}
        disabled={!hasUpdate}
      >
        <Text
          size="sm"
          c="dimmed"
          component="a"
          mr={45}
        >
          v{APP_VERSION}
        </Text>
      </Tooltip>
    </div>
  );
}
