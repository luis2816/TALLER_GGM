if (document.getElementById("id_biografia") !== null) {
    document.getElementById("id_biografia").addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:5502/biografia.html";
      });
    }
      
      if (document.getElementById("id_volver") !== null) {
        document.getElementById("id_volver").addEventListener("click", function() {
          window.location.href = "http://127.0.0.1:5502/index.html";
          console.log("das click en volver");
        });
      }
      