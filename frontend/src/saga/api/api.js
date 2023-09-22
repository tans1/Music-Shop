export async function fetch_Music() {
  const result = await fetch("http://localhost:5000/all").then((response) =>
    response.json()
  );

  return result.value;
}

export async function delete_Music(Id) {
  const result = await fetch(`http://localhost:5000/delete?Id=${Id}`, {
    method: "DELETE"
  }).then((response) => response.json());
  return result;
}

export async function update_Music(update_data) {
  const result = await fetch(
    `http://localhost:5000/update?Id=${update_data.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: update_data.title,
        artist: update_data.artist
      })
    }
  ).then((response) => response.json());
  return result;
}

export async function download_Music(fileName) {
  const result = await fetch(
    `http://localhost:5000/download?fileName=${fileName}`
  );
  window.open(result.url);
  return result;
}
