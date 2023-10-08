import { useState, useEffect } from "react";
import Image from "next/image";

function Load() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // テスト用に5秒の遅延を設定
    setTimeout(() => {
      setLoading(false); // ロード完了
    }, 1000); // 5秒の遅延
  }, []);

  return (
    <div>
      {loading ? (
        // ロード中の場合に表示される要素
        <div>Loading...</div>
      ) : (
        // ロードが完了した場合に表示されるコンテンツ
        <div style={{ background: "#333333", padding: "10%" }}>
          <h1>コンテンツが表示されました</h1>
          <Image
            src="/transparent/992-removebg.png"
            width={200}
            height={200}
            alt=""
          />
          <Image
            style={{ backgroundColor: "white" }}
            src="/r0191.png"
            width={200}
            height={200}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default Load;
