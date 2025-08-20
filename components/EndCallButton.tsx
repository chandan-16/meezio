"use client";

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";
import { useRouter } from "next/router";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  if(!call) throw new Error("useStreamCall must be used within a StreamCall Component.")

  const { useLocalParticipant } = useCallStateHooks();
  const LocalParticipant = useLocalParticipant();

  const isMeetingOwner =
    LocalParticipant &&
    call?.state.createdBy &&
    LocalParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  const endCall = async () => {
    await call.endCall();
    router.push('/');
  };

  return (
    <Button
      onClick={endCall}
      className="bg-red-500"
    >
      End Call for Everyone
    </Button>
  );
};

export default EndCallButton;
