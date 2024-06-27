export default function DigitDisplay(props: { prev: number; next: number }) {
    const { prev, next } = props;
    return (
        <div className="w-full aspect-square relative text-[min(5rem,10vw)]">
            <div className="rounded-xl absolute aspect-[2/1] w-full bg-c_dark_desaturated_blue brightness-75 text-c_soft_red overflow-hidden">
                <div
                    key={`up to ${next}`}
                    className="w-full absolute aspect-square top-0 bg-c_dark_desaturated_blue text-c_soft_red flex justify-center items-center"
                >
                    {next}
                </div>
                <div
                    key={`up from ${prev}`}
                    className="w-full animate-uptomiddle absolute bg-c_dark_desaturated_blue aspect-square top-0 text-c_soft_red flex justify-center items-center"
                >
                    {prev}
                </div>
            </div>
            <div className="rounded-xl absolute aspect-[2/1] top-[50%] w-full bg-c_dark_desaturated_blue text-c_soft_red overflow-hidden">
                <div
                    key={`bottom to ${next}`}
                    className="w-full aspect-square absolute bottom-0 bg-c_dark_desaturated_blue text-c_soft_red z-10 animate-middletobottom flex justify-center items-center"
                >
                    {next}
                </div>
                <div
                    key={`bottom from ${prev}`}
                    className="w-full aspect-square absolute bottom-0 bg-c_dark_desaturated_blue text-c_soft_red flex justify-center items-center"
                >
                    {prev}
                </div>
            </div>
        </div>
    );
}
