using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PauseScreen : MonoBehaviour
{

    [SerializeField] private GameObject pauseScreen;

    void Update()
    {
        if (Input.GetKey(KeyCode.Escape))
        {
            pauseScreen.SetActive(true);
        }
    }

    public void resume()
    {
		pauseScreen.SetActive(false);
	}

    public void exit()
    {

    }
}
