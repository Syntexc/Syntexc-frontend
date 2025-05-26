import Image from "next/image";
import Link from "next/link";

interface LinkModelBoxProp {
  modelheading?: string;
  modelcontent?: string;
  buttonsave?: any;
  buttonclose?: any;

  modelclose?: any;

  itemicon?: "sussess" | "update" | "delete";
}

const LinkModelBox = ({
  modelheading,
  modelcontent,
  buttonsave,
  buttonclose,
  modelclose,
  itemicon,
}: LinkModelBoxProp) => {
  return (
    <>
      <div className="overlay">
        <div className="popup-container">
          <div className="">
            <div className="croos-btn">
              <button
                type="button"
                className=""
                aria-label="Close"
                onClick={buttonclose}
              >
                ×
              </button>

              <div className="">
                {itemicon === "sussess" && (
                  <>
                    <div className="icon">
                      <Image
                        src="/checkbox-circle-line.svg"
                        width={50}
                        height={50}
                        alt="icon"
                      />
                    </div>
                  </>
                )}

                {itemicon === "update" && (
                  <>
                    <div className="icon">
                      <Image
                        src="/loop-left-line.svg"
                        width={50}
                        height={50}
                        alt="icon"
                      />
                    </div>
                  </>
                )}

                {itemicon === "delete" && (
                  <>
                    <div className="icon">
                      <Image
                        src="/delete-bin-linered.svg"
                        width={50}
                        height={50}
                        alt="icon"
                      />
                    </div>
                  </>
                )}

                <div className="content">
                  <p className="">{modelcontent}</p>
                </div>
              </div>
            </div>
            <div className="button-new">
              {/* <button
                className="inline-block focus:outline-none text-red-500 hover:bg-red-500 hover:text-white bg-transparent border border-gray-200 dark:bg-transparent dark:text-red-500 dark:hover:text-white dark:border-gray-700 dark:hover:bg-red-500  text-sm font-medium py-2 px-3 rounded me-1 close"
                onClick={buttonclose}
              >
                Close
              </button> */}

              <button
                className=""
                onClick={buttonsave}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkModelBox;
