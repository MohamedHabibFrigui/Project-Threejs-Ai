import CustomBotton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows="5"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomBotton
            type="outline"
            title="Asking AI..."
            customStyles="text-sx"
          />
        ) : (
          <>
            <CustomBotton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-sx"
            />
            <CustomBotton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-sx"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
